# PM2 Web GUI

Interface web moderna para gerenciar processos PM2, projetada para implantação no **IIS do Windows Server 2019**.

---

## 🚀 Início Rápido (desenvolvimento local)

```powershell
# 1. Instalar dependências
cd pm2-gui-web
npm install

# 2. Iniciar servidor
node server.js

# 3. Acessar no browser
# http://localhost:6767
```

---

## 🖥️ Deploy no IIS (Windows Server 2019)

### Pré-requisitos no servidor

| Componente | Download / Instalação |
|-----------|----------------------|
| Node.js LTS | https://nodejs.org |
| PM2 (global) | `npm install -g pm2` |
| IIS URL Rewrite Module | https://www.iis.net/downloads/microsoft/url-rewrite |
| Application Request Routing (ARR) | https://www.iis.net/downloads/microsoft/application-request-routing |

---

### Passo a passo

#### 1. Copiar os arquivos

```powershell
# Copiar a pasta pm2-gui-web para o servidor
# Exemplo: C:\inetpub\wwwroot\pm2-gui\

# Instalar dependências na pasta de destino
cd C:\inetpub\wwwroot\pm2-gui
npm install --production
```

#### 2. Registrar como serviço PM2

```powershell
# Iniciar a aplicação com PM2
pm2 start server.js --name "pm2-gui-web" --node-args="--max-old-space-size=256"

# Salvar para sobreviver ao reboot
pm2 save

# Configurar PM2 para iniciar automaticamente com o Windows
pm2 startup windows
# Execute o comando gerado como Administrador
```

#### 3. Configurar o IIS

1. Abra o **IIS Manager**
2. Habilite o **proxy reverso no ARR**:
   - Clique no servidor (nó raiz) → **Application Request Routing Cache**
   - **Server Proxy Settings** → marque **Enable proxy** → Apply
3. Crie um novo site:
   - **Sites** → Botão direito → **Add Website**
   - Site name: `PM2 GUI`
   - Physical path: `C:\inetpub\wwwroot\pm2-gui`
   - Binding: porta `80` (ou `443` com certificado SSL)
4. **Application Pool**:
   - Selecione o pool do site → **Advanced Settings**
   - `.NET CLR Version` → **No Managed Code**
   - `Idle Time-out` → `0` (sem timeout)
5. **Permissões**:
   - Pasta do projeto → Botão direito → Propriedades → Segurança
   - Adicionar `IIS_IUSRS` com permissão **Leitura e Execução**

#### 4. Verificar

```powershell
# Verificar que o Node.js está rodando
pm2 status

# Testar diretamente na porta do Node
curl http://localhost:6767/api/processes

# Acessar pelo IIS
# http://SEU-SERVIDOR/
```

---

## 🔀 Configuração de Proxy Reverso em Subcaminho no IIS

Para publicar o **PM2 Web GUI** sob um subcaminho do seu site principal (por exemplo, `http://docebrinquedo.local/pm2-manager`), a regra do IIS deve direcionar a requisição para a **porta interna do Node.js** (por exemplo, `6767`).

> ⚠️ **IMPORTANTE (Evitando Erro HTTP 400.605 - Max-Forwards limit)**:
> Se o IIS tentar fazer rewrite apontando para a mesma porta do próprio site IIS (ex: IIS escutando em `8081` e fazendo rewrite para `http://localhost:8081`), o IIS entrará em um **loop infinito de proxy** e retornará `HTTP 400.605`.
> 
> **Solução**: O Node.js roda na porta interna `6767` e o IIS redireciona para `http://localhost:6767/{R:1}`.

### Regra de Reescrita no Site Pai (`docebrinquedo.local`):

```xml
<!-- ================================================= -->
<!-- PROXY PARA O PM2 MANAGER                          -->
<!-- http://docebrinquedo.local/pm2-manager            -->
<!--       -> http://localhost:6767                    -->
<!-- ================================================= -->
<rule name="pm2-manager" stopProcessing="true">
  <match url="^pm2-manager(?:/(.*))?$" />
  <action type="Rewrite" url="http://localhost:6767/{R:1}" />
</rule>
```

A aplicação trata automaticamente:
- Redirecionamento da URL sem barra final (`/pm2-manager` → `/pm2-manager/`).
- Carregamento de recursos estáticos (`css/style.css`, `js/app.js`) com caminhos relativos.
- Resolução dinâmica das chamadas REST e conexões SSE (`/pm2-manager/api/...`).

---

## ⚙️ Variáveis de ambiente

| Variável | Padrão | Descrição |
|---------|--------|-----------|
| `PORT` | `6767` | Porta interna do servidor Node.js |

Para alterar a porta:
```powershell
$env:PORT = "6767"
node server.js
```

Ou no ecosystem PM2:
```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'pm2-gui-web',
    script: 'server.js',
    env: { PORT: 6767, NODE_ENV: 'production' }
  }]
}
```

---

## 📋 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | `/api/processes` | Lista todos os processos |
| GET    | `/api/processes/:id/logs` | Logs do processo |
| POST   | `/api/processes/:id/start` | Inicia processo |
| POST   | `/api/processes/:id/stop` | Para processo |
| POST   | `/api/processes/:id/restart` | Reinicia processo |
| POST   | `/api/processes/:id/reload` | Reload gracioso |
| DELETE | `/api/processes/:id` | Remove processo |
| POST   | `/api/flush` | Limpa todos os logs |
| POST   | `/api/save` | Salva estado (pm2 save) |
| GET    | `/api/system` | Info do sistema |

---

## 🔐 Integração SSO (Single Sign-On)

O PM2 Web GUI possui integração nativa com o **Portal SSO Doce Brinquedo**.

### Variáveis de Ambiente (`.env`)

Crie ou edite o arquivo `.env` na raiz do projeto (use [.env.example](file:///d:/garotodeprograma/DC%20---%20PM2-GUI-WEB/.env.example) como base):

```ini
PORT=6767
SSO_URL=http://192.168.13.244:7000
SSO_API_KEY=dc_live_sua_chave_aqui
SSO_PORTAL_URL=http://192.168.13.244:7000
SESSION_SECRET=sua_chave_secreta_aqui
```

### Como Funciona o Fluxo SSO:
1. O usuário acessa o sistema pelo Portal SSO ou via link com `?ticket=...`.
2. O Frontend Angular captura o ticket temporário e limpa a URL imediatamente (`history.replaceState`).
3. O Backend valida o ticket junto ao SSO através do endpoint `POST /api/apikey/validate-token` com a chave `X-Api-Key`.
4. Uma sessão local assinada é criada e os dados do usuário (nome, email, avatar, departamento e permissões) são exibidos no cabeçalho do painel.

---

## 🔒 Segurança

- **X-Api-Key protegida no Backend**: As credenciais de integração com o SSO nunca são expostas ao navegador.
- **Tokens de Sessão Assinados**: HMAC-SHA256 para integridade e validação de expiração.
- **Proteção adicional no IIS**: Opcionalmente, utilize Windows Authentication ou restrições de IP no IIS Manager.

---

## 🗂️ Estrutura do projeto

```
pm2-gui-web/
├── server.js               ← Backend Node.js/Express + SSO API
├── package.json
├── .env.example            ← Template de configuração de ambiente
├── web.config              ← Configuração IIS (ARR reverse proxy)
├── README.md
├── docs/
│   └── GUIA_INTEGRACAO_SSO.md ← Especificação técnica do SSO
├── frontend/               ← SPA Angular 22 (Material + Signals)
│   └── src/app/
│       ├── services/auth.service.ts       ← Estado e handoff do SSO
│       ├── interceptors/auth.interceptor.ts ← Anexo de token Bearer
│       └── pages/dashboard/               ← Dashboard com perfil de usuário
└── public/                 ← Build de produção compilado (servido pelo Node.js)
```

---

## ⌨️ Atalhos de teclado

| Tecla | Ação |
|-------|------|
| `Ctrl+R` | Atualizar processos agora |
| `Esc` | Fechar drawer de logs / modal |
