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

## 🔒 Segurança

A aplicação não possui autenticação própria. Para proteger o acesso:

**Opção 1: Windows Authentication no IIS**
- IIS Manager → site → Authentication → Disable Anonymous, Enable Windows Auth

**Opção 2: IP Restriction**
- IIS Manager → site → IP Address and Domain Restrictions

**Opção 3: Basic Auth com módulo IIS**
- Habilitar Basic Authentication no IIS (requer HTTPS)

---

## 🗂️ Estrutura do projeto

```
pm2-gui-web/
├── server.js          ← Backend Node.js/Express
├── package.json
├── web.config         ← Configuração IIS (ARR reverse proxy)
├── README.md
└── public/
    ├── index.html     ← SPA (dashboard)
    ├── css/
    │   └── style.css  ← Design system dark mode
    └── js/
        └── app.js     ← Frontend (fetch, polling, UI)
```

---

## ⌨️ Atalhos de teclado

| Tecla | Ação |
|-------|------|
| `Ctrl+R` | Atualizar processos agora |
| `Esc` | Fechar drawer de logs / modal |
