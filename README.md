## Descrição

Aplicativo de catálogo de filmes
Acesse via UI: 
(https://test-movies-client.herokuapp.com/) framework TypeScript starter repository.

## Instalação

Após clonar o repositório, acesse o diretório raiz do projeto e execute:

```bash
$ npm install
```

## Configurando ambiente

Opcionalmente você pode configurar as credencias do banco e api_key. 
Basta seguir criar um .env file seguindo o exemplo do .env.example

OBS: As informações do banco estão sendo exibidas para fins de teste. Em um projeto real com dados reais de produção, estas informações não estariam disponíveis.

## Rodando o app

```bash
# development para executar o projeto
$ npm run start

# watch mode para executar o projeto no watch mode
$ npm run start:dev

```

## Testes

```bash
# Testes unitários
$ npm run test -t src/movies/movies.controller.spec.ts --watch

# Configure o lado do cliente
https://github.com/willeynascimentodev/movies-catalog-client

```
