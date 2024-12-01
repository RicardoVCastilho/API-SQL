# **API de Gerenciamento de Clientes com MySQL2**

API RESTful para gerenciamento de dados de clientes, utilizando Node.js, Express e MySQL.

Este repositório contém uma API simples para realizar operações de CRUD (Create, Read, Update, Delete) em um banco de dados de clientes. A API foi projetada para ser eficiente, simples de entender e com uma arquitetura modular.

## **🌟 Tecnologias Utilizadas**

- Node.js: Ambiente de execução JavaScript no servidor.
- Express: Framework para construção de APIs RESTful.
- MySQL: Banco de dados relacional.
- CommonJS: Sistema de módulos utilizado para importar e exportar funcionalidades.

## **🚀 Funcionalidades**

- Cadastrar clientes: Permite adicionar um novo cliente no sistema com as informações de nome, idade, email e telefone.
- Listar clientes: Exibe todos os clientes cadastrados.
- Atualizar informações de um cliente: Atualiza os dados de um cliente existente.
- Excluir cliente: Remove um cliente do sistema.

## **🌍 Endpoints da API**

1. POST /api/clients
Adiciona um novo cliente ao banco de dados.

Exemplo de Body da Requisição:

```bash
{
    "name": "Nome do Cliente",
    "age": 30,
    "email": "cliente@example.com",
    "fone": "(XX) XXXX-XXXX"
}
```

2. GET /api/clients
Retorna todos os clientes cadastrados.

Resposta Exemplo:

```bash
[
  {
    "id": 1,
    "name": "Ricardo",
    "age": 22,
    "email": "ricardo@hotmail.com",
    "fone": "(81) 9.7896-5432"
  },
  {
    "id": 2,
    "name": "Luana",
    "age": 21,
    "email": "luana@gmail.com",
    "fone": "(81) 9123-4567"
  }
]
```

3. PUT /api/clients/:id
Atualiza as informações de um cliente específico pelo ID.

Exemplo de Body da Requisição:

```bash
{
    "name": "Novo Nome",
    "age": 31,
    "email": "novoemail@example.com",
    "fone": "(XX) XXXX-XXXX"
}
```

4. DELETE /api/clients/:id
Remove um cliente do banco de dados pelo ID.

## **📂 Estrutura do Repositório**

O repositório está organizado da seguinte forma:

```plaintext
/API + SQL
 /commonJsApi
  /node_modules
  /src
   /controllers
    clientsControllers.js  # Controladores para operações CRUD
   /database
    connection.js         # Configuração de conexão com o MySQL
   /models
    clients.js             # Modelo de dados do cliente
   /routes
    clientsRoutes.js       # Rotas da API
  index.js                 # Arquivo principal do servidor
  package-lock.json
  package.json
  ```

## **Descrição dos Arquivos:**

- /src/controllers: Contém os controladores responsáveis pela lógica das operações CRUD.
- /src/database: Define a configuração da conexão com o banco de dados MySQL.
- /src/models: Define o modelo de dados para clientes.
- /src/routes: Define as rotas que mapearão os endpoints para os controladores.
- index.js: Arquivo principal onde o servidor Express é configurado.
- package.json: Contém as dependências do projeto.

## **⚙️ Como Rodar a Aplicação**

1. Clonar o Repositório

```bash
git clone https://github.com/RicardoVCastilho/API-SQL
cd seu-repositorio
```
2. Instalar as Dependências
```bash
npm install
```
3. Configurar o Banco de Dados
Crie um banco de dados MySQL e configure a conexão no arquivo: 

```plaintext
src/database/connection.js.
```
4. Rodar o Servidor
```bash
npm start
```

O servidor estará disponível em http://localhost:3000.

## **🤝 Como Contribuir**
Se você deseja contribuir com o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (git checkout -b minha-feature).
3. Faça o commit das suas alterações (git commit -am 'Adicionando nova feature').
4. Envie a branch para o repositório remoto (git push origin minha-feature).
5. Abra um pull request para a branch principal.

## **Autor**
[Ricardo Vitor Castilho](https://github.com/RicardoVCastilho)
