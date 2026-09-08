# 📘 Guia Definitivo: Configuração de Proxy Reverso em Subcaminho no IIS (ARR & URL Rewrite)

Este guia serve como referência técnica reutilizável para configurar aplicações Web / Node.js (ou outras linguagens) publicadas sob **subcaminhos de um site principal no IIS** (exemplo: `http://meudominio.com/minha-app`).

---

## 🎯 Conceito Geral e Regra de Ouro

Ao publicar uma aplicação em subcaminho via Proxy Reverso no IIS:

1. **A Aplicação roda em uma porta interna** no servidor (ex: `http://localhost:6767`).
2. **O IIS (Site Pai)** escuta no domínio/porta principal (ex: `http://meudominio.com` ou porta `80`/`443`/`8081`).
3. **O módulo URL Rewrite (ARR) do IIS** captura o subcaminho (ex: `/minha-app`) e encaminha internamente a requisição para a porta da aplicação (`http://localhost:6767`).

---

## ⚠️ Como Evitar o Erro `HTTP 400.605 - Bad Request (Max-Forwards limit)`

### A Causa
O Erro **HTTP 400.605** ocorre por um **Loop Infinito de Proxy**. Isso acontece quando a regra de reescrita do IIS aponta para a **mesma porta em que o site IIS está escutando** (exemplo: o site IIS está na porta `8081` e a regra faz `Rewrite` para `http://localhost:8081/{R:1}`). O IIS entra em loop tentando redirecionar para ele mesmo até atingir o limite `Max-Forwards`.

### A Solução
- **Sempre utilize portas distintas**: O IIS escuta em uma porta/binding e a sua aplicação backend (Node.js, .NET, Python, etc.) escuta em outra **porta de aplicação interna** (ex: `6767`, `3000`, `5000`).
- A regra do IIS deve direcionar para a **porta interna da aplicação**: `http://localhost:6767/{R:1}`.

---

## 🛠️ O que deve ser ajustado na Aplicação (Checklist de Código)

Para que qualquer aplicação funcione perfeitamente via proxy reverso em subcaminho, os seguintes ajustes são necessários no código do projeto:

### 1. HTML (`index.html`) — Barra Final e Caminhos Relativos

#### A) Redirecionamento de Barra Final (Subpath Trailing Slash)
Quando o usuário digita `http://meudominio.com/minha-app` (sem a barra final `/`), o navegador interpreta `minha-app` como se fosse um arquivo. Isso faz com que caminhos relativos de CSS/JS quebrem. Adicione este script no `<head>` do `index.html`:

```html
<script>
  // Normaliza o subcaminho garantindo a barra final (ex: /minha-app -> /minha-app/)
  if (window.location.pathname.length > 1 && 
      !window.location.pathname.endsWith('/') && 
      !window.location.pathname.split('/').pop().includes('.')) {
    window.location.replace(window.location.pathname + '/' + window.location.search + window.location.hash);
  }
</script>
```

#### B) Recursos Estáticos Relativos
Nunca use barras iniciais (`/`) nos arquivos CSS e JS no HTML.

- **Incorreto**: `<link rel="stylesheet" href="/css/style.css" />`
- **Correto**: `<link rel="stylesheet" href="css/style.css" />` (ou `./css/style.css`)

---

### 2. Frontend JavaScript (`app.js`) — Resolução Dinâmica de API

No código JavaScript client-side (`fetch`, `axios`, `EventSource`, `WebSocket`), crie uma função auxiliar para prefixar dinamicamente o subcaminho do proxy:

```javascript
// Helper para subcaminhos em Proxy Reverso
function getApiPath(endpoint) {
  const cleanPath = String(endpoint || '').replace(/^\/+/, '');
  const pathname  = window.location.pathname;
  const basePath  = pathname.endsWith('/') ? pathname : pathname + '/';
  return basePath + cleanPath;
}

// Exemplo de uso com fetch / REST API:
async function apiFetch(method, path, body = null) {
  const fullPath = getApiPath(path); // Resolve ex: /minha-app/api/usuarios
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(fullPath, opts);
  return await res.json();
}

// Exemplo de uso com Server-Sent Events (SSE):
const sse = new EventSource(getApiPath('api/stream'));

// Exemplo de uso com WebSockets:
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const wsPath = getApiPath('ws');
const socket = new WebSocket(`${protocol}//${window.location.host}${wsPath}`);
```

---

### 3. Backend (Node.js / Express) — Suporte a Proxy

No arquivo principal do servidor (ex: `server.js` / `app.js`):

```javascript
const express = require('express');
const app = express();

// Porta interna da aplicação (ex: 6767)
const PORT = process.env.PORT || 6767;

// Habilite o trust proxy para que o Express entenda os cabeçalhos do IIS ARR
app.set('trust proxy', true);

app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Aplicação rodando internamente na porta ${PORT}`);
});
```

---

## 📋 Regra para o `web.config` do Site Pai no IIS

No servidor IIS onde o site pai (ex: `docebrinquedo.local`) está hospedado, adicione a seguinte regra no arquivo `web.config` dentro da seção `<system.webServer><rewrite><rules>`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>

        <!-- ================================================= -->
        <!-- PROXY PARA A APLICAÇÃO (Ex: /minha-app)           -->
        <!-- http://meudominio.com/minha-app                   -->
        <!--       -> http://localhost:6767                    -->
        <!-- ================================================= -->
        <rule name="minha-app-proxy" stopProcessing="true">
          <match url="^minha-app(?:/(.*))?$" />
          <action type="Rewrite" url="http://localhost:6767/{R:1}" />
        </rule>

      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

---

## 🔍 Guia Rápido de Resolução de Problemas (Troubleshooting)

| Sintoma / Erro | Causa Provável | Como Resolver |
|---------------|----------------|---------------|
| **HTTP 400.605 (Max-Forwards limit)** | O IIS está reescrevendo para a mesma porta em que escuta. | Mude a porta da regra para a porta interna da aplicação (ex: `http://localhost:6767/{R:1}`). |
| **HTTP 502.3 Bad Gateway** | A aplicação Node.js / backend não está rodando na porta indicada. | Inicie o serviço com `node server.js` ou `pm2 start server.js` e verifique a porta com `netstat -ano`. |
| **Erro 404 nos arquivos CSS / JS** | O HTML está usando caminhos absolutos com `/` no início. | Altere no HTML `<link href="/css/..." />` para `<link href="css/..." />`. |
| **Erro 404 nas chamadas de API** | O JS client-side está chamando `/api/...` em vez de `/minha-app/api/...`. | Utilize a função `getApiPath()` no frontend para resolver o prefixo dinamicamente. |
| **Sessão / Cookies não funcionam** | O atributo `Path` do cookie está restrito à raiz `/`. | Ajuste a configuração de cookies da aplicação para aceitar o subcaminho ou use tokens JWT via header `Authorization`. |

---

*Documento gerado para reuso em projetos web com proxy reverso no IIS.*
