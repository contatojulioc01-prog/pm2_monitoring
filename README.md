# DC — PM2 Web GUI & Gerenciador de Permissões

<p align="center">
  <strong>Painel de Gestão e Monitoramento de Processos PM2 com Autenticação SSO, Multi-Servidores e Controle de Acesso</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Versão-2.0.0-blue.svg" alt="Versão 2.0.0" />
  <img src="https://img.shields.io/badge/Node.js-%3E%3D18.0.0-brightgreen.svg" alt="Node.js" />
  <img src="https://img.shields.io/badge/PM2-%5E7.0.3-orange.svg" alt="PM2" />
  <img src="https://img.shields.io/badge/Angular-18%2B-red.svg" alt="Angular" />
  <img src="https://img.shields.io/badge/Banco-SQLite3-lightgrey.svg" alt="SQLite" />
  <img src="https://img.shields.io/badge/Plataforma-Windows%20Server%20%2F%20IIS-0078D7.svg" alt="IIS" />
</p>

---

## 📖 Visão Geral

O **DC — PM2 Web GUI** é uma solução completa para controle operacional, governança e monitoramento de aplicações gerenciadas pelo **PM2**. Projetada especialmente para o ambiente corporativo da **Doce Brinquedo**, a aplicação atua tanto de forma autônoma quanto integrada ao **Portal SSO**, permitindo gerenciar instâncias locais e servidores remotos com controle granular de permissões por usuário.

---

## ✨ Principais Funcionalidades

- 📊 **Monitoramento Contínuo e Histórico em Tempo Real**:
  - Renderização segundo a segundo de consumo de CPU e Memória (RAM).
  - Coleta e gravação automática em segundo plano via SQLite (`pm2-recorder`), garantindo dados históricos mesmo sem usuários ativos na tela.
  - Alertas visuais de sobrecarga de recursos e restarts anômalos.

- ⚙️ **Gerenciamento Completo de Processos**:
  - Ações diretas: Iniciar (`start`), Parar (`stop`), Reiniciar (`restart`), Reload gracioso (`reload`) e Remover (`delete`).
  - Limpeza rápida de logs (`flush`) e persistência de estado do PM2 (`pm2 save`).
  - Suporte a salvar/configurar inicialização automática no boot do Windows (`pm2 startup`).

- 📑 **Visualizador de Logs em Tempo Real**:
  - Drawer lateral para visualização de `stdout` e `stderr` com auto-scroll, busca por texto e separação de erros.

- 🖥️ **Arquitetura Multi-Servidores (Agentes Remotos)**:
  - Cadastro e monitoramento centralizado de múltiplos servidores ou instâncias remotas com sincronização segura via token.

- 📂 **Organização por Pastas e Grupos**:
  - Categorização lógica das aplicações por setor, ambiente ou departamento (ex.: APIs, Automações, Coletores, BI).

- 👥 **Controle Granular de Usuários e Permissões**:
  - Gerenciamento de usuários locais e sincronizados via SSO.
  - Restrição de permissões operacionais (exibir, editar, criar, deletar processos e acessar pastas específicas).

- 🔐 **Integração Nativa com Portal SSO (Single Sign-On)**:
  - Autenticação sem atrito via ticket JWT (`?ticket=...`).
  - Validação backend-to-backend segura com `X-Api-Key` (credenciais nunca expostas no navegador).
  - Modo bypass local para desenvolvimento offline.

- 🔀 **Compatibilidade Universal com IIS e Subcaminhos**:
  - Injeção dinâmica de `<base href>` no backend Express.
  - Funciona na raiz (`http://servidor/`) ou sob subcaminhos reversos (`http://docebrinquedo.local/pm2-manager/` ou `/doce-manager/`).
  - Prevenção ativa contra erros de loop de proxy (`HTTP 400.605 - Max-Forwards limit`).

---

## 🗂️ Estrutura do Repositório

```
DC --- PM2-GUI-WEB/
├── backend/
│   ├── src/
│   │   ├── data/             # Banco SQLite (db.sqlite)
│   │   ├── middleware/       # Autenticação e controle de acesso
│   │   ├── routes/           # Rotas REST (pm2, auth, servers, folders, users, groups)
│   │   ├── utils/            # Gravador histórico (pm2-recorder), sync e banco
│   │   └── server.js         # Servidor unificado Express + PM2 + Static Files
│   └── public/               # Build compilado do Frontend Angular servido pelo Express
├── frontend/                 # Aplicação SPA Angular (Material + Signals)
│   ├── src/app/
│   │   ├── components/       # Modais, cards, gráficos e drawers
│   │   ├── pages/            # Dashboard principal e views de administração
│   │   └── services/         # Consumo de API, SSE e estado de autenticação
│   ├── angular.json
│   └── package.json
├── docs/                     # Manuais técnicos detalhados
│   ├── GUIA_INTEGRACAO_SSO.md
│   └── GUIA_PROXY_REVERSO_IIS.md
├── .env.example              # Modelo de variáveis de ambiente
├── .gitignore                # Regras de exclusão Git (node_modules, logs, .env)
├── package.json              # Orquestrador de scripts e dependências do backend
├── server.js                 # Ponto de entrada raiz (delegado para backend/src/server.js)
└── web.config                # Configuração do IIS para Proxy Reverso (ARR)
```

---

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** LTS (versão `>= 18.0.0`)
- **PM2** instalado globalmente:
  ```powershell
  npm install -g pm2
  ```

---

### 1. Instalação das Dependências

Instale as dependências da raiz (backend) e do frontend:

```powershell
# Dependências do backend e orquestrador
npm install

# Dependências do frontend Angular
cd frontend
npm install
cd ..
```

---

### 2. Configuração do Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto (ou dentro de `backend/`) baseado no [.env.example](file:///d:/garotodeprograma/DC%20---%20PM2-GUI-WEB/.env.example):

```ini
# Porta interna do servidor
PORT=6767
HOST=0.0.0.0

# Integração com Portal SSO Doce Brinquedo
SSO_URL=http://192.168.13.244:7000
SSO_API_KEY=dc_live_sua_chave_aqui
SSO_PORTAL_URL=http://192.168.13.244:7000

# Chave secreta de sessão interna (HMAC-SHA256)
SESSION_SECRET=pm2_gui_sso_secret_key_change_in_production
```

> [!NOTE]
> Se as variáveis do `SSO_*` não forem preenchidas, a aplicação roda em **Modo Local (Bypass)**, liberando o acesso para ambiente de desenvolvimento.

---

### 3. Execução em Desenvolvimento

Para rodar backend e frontend simultaneamente com hot-reload:

```powershell
npm run dev
```

- **Backend**: `http://localhost:6767`
- **Frontend Angular (Dev Server)**: `http://localhost:4200` (com proxy reverso para a porta `6767` configurado via `proxy.conf.json`)

---

### 4. Build de Produção

Compile o frontend Angular. Os arquivos finais serão gerados automaticamente dentro de `backend/public`:

```powershell
npm run build
```

---

### 5. Execução em Produção

Com o build gerado, basta iniciar o backend (que servirá a API e o SPA compilado em uma única porta):

```powershell
# Execução direta
npm start

# Ou via PM2 no Windows Server
pm2 start server.js --name "pm2-gui-web" --node-args="--max-old-space-size=256"
pm2 save
```

---

## 🖥️ Publicação no IIS (Windows Server)

Para publicar no IIS utilizando o **Application Request Routing (ARR)** e **URL Rewrite Module**:

### A. Site Dedicado (ex.: porta 8081 ou host dedicado)
O arquivo [`web.config`](file:///d:/garotodeprograma/DC%20---%20PM2-GUI-WEB/web.config) na raiz do projeto já contém a regra pronta para redirecionar todas as requisições para a porta interna do Node.js:

```xml
<rule name="PM2GUI-ReverseProxy" stopProcessing="true">
  <match url="(.*)" />
  <action type="Rewrite" url="http://localhost:6767/{R:1}" />
</rule>
```

### B. Sob Subcaminho (ex.: `http://docebrinquedo.local/pm2-manager/`)
No `web.config` do **site pai** no IIS, adicione a regra:

```xml
<rule name="pm2-manager" stopProcessing="true">
  <match url="^pm2-manager(?:/(.*))?$" />
  <action type="Rewrite" url="http://localhost:6767/{R:1}" />
</rule>
```

> [!WARNING]
> **Atenção ao Erro HTTP 400.605 (Loop de Proxy)**:
> O IIS nunca deve fazer rewrite para a mesma porta em que ele próprio escuta. O Node.js deve rodar em uma porta isolada (ex.: `6767`) e o IIS deve direcionar para `http://localhost:6767/{R:1}`.

---

## 📡 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/auth/login` | Autenticação local ou validação de ticket SSO |
| `GET`  | `/api/auth/me` | Retorna o perfil do usuário logado |
| `GET`  | `/api/processes` | Lista todos os processos PM2 e status em tempo real |
| `GET`  | `/api/processes/:id/logs` | Obtém histórico de logs de um processo |
| `POST` | `/api/processes/:id/start` | Inicia o processo |
| `POST` | `/api/processes/:id/stop` | Interrompe o processo |
| `POST` | `/api/processes/:id/restart` | Reinicia o processo |
| `POST` | `/api/processes/:id/reload` | Recarrega com zero-downtime |
| `DELETE`| `/api/processes/:id` | Remove o processo do PM2 |
| `POST` | `/api/flush` | Limpa todos os logs de stdout e stderr |
| `POST` | `/api/save` | Salva a lista de processos (`pm2 save`) |
| `GET`  | `/api/system` | Métricas gerais de CPU, Memória e SO |
| `GET`  | `/api/metrics/history` | Consulta métricas históricas de CPU/RAM gravadas no SQLite |
| `GET`  | `/api/servers` | Lista servidores e instâncias remotas cadastradas |
| `POST` | `/api/servers` | Cadastra novo servidor/agente PM2 |
| `GET`  | `/api/folders` | Lista diretórios e pastas vinculadas |
| `GET`  | `/api/users` | Gestão de usuários e permissões |
| `GET`  | `/api/groups` | Grupos e agrupamentos de serviços |

---

## 🛡️ Padrões e Boas Práticas

- **Codificação UTF-8 Obrigatória**: Todas as respostas HTTP do backend utilizam `charset=utf-8` para garantir integridade de acentos e caracteres especiais.
- **Data/Hora Local**: Proibição estrita de conversores UTC destrutivos no histórico e logs; o sistema opera exclusivamente com a data/hora local do servidor.
- **Segurança e `.gitignore`**: Arquivos de ambiente (`.env`), bancos SQLite temporários, relatórios de deploy e pastas `node_modules` são estritamente mantidos fora do controle de versão.

---

## 📄 Licença

Este projeto é desenvolvido para uso interno corporativo — **Doce Brinquedo**. Distribuído sob a licença [MIT](file:///d:/garotodeprograma/DC%20---%20PM2-GUI-WEB/package.json).
