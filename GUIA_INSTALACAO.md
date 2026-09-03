# 🚀 Guia de Instalação - Gestor Financeiro

## Opção 1: Com Docker Compose (Recomendado)

### Pré-requisitos
- Docker instalado ([Download](https://www.docker.com/products/docker-desktop))
- Docker Compose instalado

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/spr3coracoes-lang/gestor-financeiro.git
cd gestor-financeiro
```

2. **Crie o arquivo .env**
```bash
cp backend/.env.example backend/.env
```

3. **Inicie os containers**
```bash
docker-compose up -d
```

4. **Acesse a aplicação**
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- pgAdmin: http://localhost:5050 (usuário: admin@admin.com, senha: admin)

## Opção 2: Instalação Local

### Pré-requisitos
- Node.js 18+ ([Download](https://nodejs.org/))
- PostgreSQL 14+ ([Download](https://www.postgresql.org/download/))

### Backend

1. **Acesse a pasta do backend**
```bash
cd backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure o arquivo .env**
```bash
cp .env.example .env
```
Edite o `.env` com suas configurações do banco de dados

4. **Inicie o servidor**
```bash
npm run dev
```

O backend estará disponível em `http://localhost:3000`

### Frontend

1. **Em outro terminal, acesse a pasta do frontend**
```bash
cd frontend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## Comandos Úteis

### Backend
```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Testes
npm run test

# Linter
npm run lint
```

### Frontend
```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Preview
npm run preview

# Lint
npm run lint
```

### Docker
```bash
# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down

# Remover volumes (banco de dados)
docker-compose down -v

# Reconstruir images
docker-compose up --build
```

## Estrutura do Banco de Dados

O banco de dados PostgreSQL será criado automaticamente com as seguintes tabelas:

- **users** - Usuários do sistema
- **accounts** - Contas (Caixa, Cofre, Sicoob, etc)
- **categories** - Categorias de transações (Plano de Contas)
- **beneficiaries** - Beneficiários/Pessoas
- **transactions** - Transações gerais
- **daes** - Registro de DAEs com GTA
- **annuities** - Anuidades
- **transfers** - Transferências entre contas
- **settlements** - Acertos entre Sindicato e Luiz Eduardo

## Funcionalidades Principais

✅ **Gerenciamento de Contas**
- Caixa, Cofre, Banco Sicoob Sindicato, Luiz Eduardo

✅ **Controle de DAEs**
- Número da GTA
- Valor original e taxa de serviço
- Data de vencimento
- Status de pagamento

✅ **Anuidades**
- Cadastro e controle
- Parcelamento
- Alertas de vencimento

✅ **Beneficiários**
- Cadastro com dados bancários
- Histórico de transações
- Controle de anuidades e DAEs

✅ **Transferências entre Contas**
- Controle de movimentação
- Referência/comprovante
- Status de transferência

✅ **Acertos Sindicato/Luiz Eduardo**
- Rastreamento de valores devidos
- Pagamentos parciais
- Histórico completo

✅ **Relatórios e Gráficos**
- Dashboard com KPIs
- Gráficos de receita vs despesa
- Análise por categoria
- Próximos vencimentos

## Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/spr3coracoes-lang/gestor-financeiro/issues)

---

**Última atualização:** Setembro 2024
