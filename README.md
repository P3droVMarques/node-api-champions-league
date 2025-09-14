<h1 align="center">Champions League API</h1>

A Champions League API é uma aplicação focada no gerenciamento de times e jogadores de futebol através de operações CRUD (Creat, Read, Update e Delete).
Os dados são armazenados em um arquivo JSON local, permitindo fácil manipulação sem necessidade de um banco de dados robusto.

<h2>Contribuições</h2>

- Implementação das funcionalidades de busca por ID (SearchById), inserção (Insert) e remoção (Delete) de times.
- Conversão e padronização dos dados dos jogadores para o formato JSON, possibilitando maior compatibilidade e facilidade de manipulação.

<h2>Funcionalidades</h2>

<h3>Jogadores</h3>

- **🔍 Listar todos os jogadores**: Retorna todos os jogadores cadastrados no players.json.
- **🔍 Buscar jogador por ID**: Retorna o jogador correspondente ao id.
- **➕ Inserir novo jogador**: Cria um novo jogador e salva no arquivo players.json.
- **✏️ Atualizar jogador existente**: Atualiza apenas as estatisticas do jogador, mantendo os demais dados inalterados.
- **❌ Deletar jogador**: Remove o jogador pelo id, retornando true se foi removido com sucesso.

<h3>times</h3>

- **🔍 Listar todos os times**: Retorna todos os times cadastrados no clubs.json.
- **🔍 Buscar time por ID**: Retorna o time correspondente ao id.
- **➕ Inserir novo time**: Cria um novo time e salva no arquivo clubs.json.

<h2>Implementação</h2>

<h3>jogadores</h3>

<h4>Listar todos os jogadores</h4>

- **Endpoint:** `GET /players`
- **Descrição:** Retorna todos os jogadores.
- **Exemplo de resposta:**

```json
[
   {
    "id": 1,
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "nationality": "Argentina",
    "position": "Forward",
    "statistics": {
      "Overall": 93,
      "Pace": 85,
      "Shooting": 94,
      "Passing": 91,
      "Dribbling": 95,
      "Defending": 38,
      "Physical": 65
    }
  },
  {
    "id": 2,
    "name": "Cristiano Ronaldo",
    "club": "Al-nassr",
    "nationality": "Portugal",
    "position": "Forward",
    "statistics": {
      "Overall": 92,
      "Pace": 89,
      "Shooting": 93,
      "Passing": 82,
      "Dribbling": 88,
      "Defending": 35,
      "Physical": 78
    }
  }
]
```
<h4>Buscar jogador por ID</h4>

- **Endpoint:** `GET /players/:id`
- **Descrição:** Retorna todos os jogadores.
- **Exemplo**
  - Endpoint: `/players/3`

#### Saída:
```json
  {
    "id": 3,
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "nationality": "Poland",
    "position": "Forward",
    "statistics": {
      "Overall": 91,
      "Pace": 80,
      "Shooting": 92,
      "Passing": 78,
      "Dribbling": 83,
      "Defending": 40,
      "Physical": 84
    }
  }
```

<h4>Inserir novo jogador</h4>

- **Endpoint:** `POST /players`
- **Descrição:** Cria um novo jogador
- **Exemplo:** 
  - O corpo da requisição deve conter:
  
  #### Entrada:
  ```json
  {
    "id": 18,
    "name": "Jorginho",
    "club": "Flamengo",
    "nationality": "Italy",
    "position": "Midfield",
    "statistics": {
      "Overall": 82,
      "Pace": 46,
      "Shooting": 67,
      "Passing": 83,
      "Dribbling": 80,
      "Defending": 73,
      "Physical": 71
    }
  }

  ```

  #### Resultado:
  ```json
  {"message": "successful"}
  ```

<h4>Atualizar jogador</h4>

- **Endpoint:** `PATCH /players/:id`
- **Descrição:** Atualiza as estatisticas de um jogador existente.
- **Exemplo:**
  #### Entrada:
  - `/players/18`

  ```json
  {
    "statistics": {
    "Overall": 82,
    "Pace": 46,
    "Shooting": 75,
    "Passing": 86,
    "Dribbling": 81,
    "Defending": 73,
    "Physical": 80
  }
  }

  ```

  #### Resultado:
  ```json
  {
  "id": 18,
  "name": "Jorginho",
  "club": "Flamengo",
  "nationality": "Italy",
  "position": "Midfield",
  "statistics": {
  "Overall": 82,
  "Pace": 46,
  "Shooting": 75,
  "Passing": 86,
  "Dribbling": 81,
  "Defending": 73,
  "Physical": 80}
  }

  ```


<h4>Deletar jogador</h4>

- **Endpoint:** `DELETE /players/:id`
- **Descrição:** Exclui dados de um jogador existente.
- **Exemplo:**

#### Entrada:
`/players/18`

#### Resultado:
```json
{"message":"deleted"}
```

<h3>times</h3>

<h4>Listar todos os times</h4>
- **Endpoint:** `GET /clubs`
- **Descrição:** Retorna todos os times.
- **Exemplo de resposta:**

```json
[
{
    "id": 1,
    "name": "Real Madrid"
  },
  {
    "id": 2,
    "name": "Barcelona"
  },
]
```
<h4>Buscar time por ID</h4>

- **Endpoint:** `GET /clubs/:id`
- **Descrição:** Retorna todos os times.
- **Exemplo**
  - Endpoint: `/clubs/3`

#### Saída:
```json
  {
    "id": 3,
    "name": "Manchester City"
    }
```

<h4>Inserir novo time</h4>

- **Endpoint:** `POST /clubs`
- **Descrição:** Cria um novo time
- **Exemplo:** 
  - O corpo da requisição deve conter:
  
  #### Entrada:
  ```json
  {
    "id": 33,
    "name": "Flamengo",
  }

  ```

  #### Resultado:
  ```json
  {"message": "successful"}
  ```

  <h4>Deletar jogador</h4>

- **Endpoint:** `DELETE /clubs/:id`
- **Descrição:** Exclui dados de um time existente.
- **Exemplo:**

#### Entrada:
`/time/33`

#### Resultado:
```json
{"message":"deleted"}
```
<h2></h2>

<h2>Tecnologias Utilizadas</h2>

- **[TypeScript](https://www.typescriptlang.org/):** Linguagem de programação utilizada para o desenvolvimento do projeto.
- **[Tsup](https://github.com/egoist/tsup):** Ferramenta de construção e empacotamento para projetos TypeScript.
- **[Tsx](https://github.com/egoist/tsx):** Compilador TypeScript que suporta a construção de projetos.
- **[Node.js](https://nodejs.org/):** Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.
- **[npm](https://www.npmjs.com/):** Gerenciador de pacotes usado no projeto.
- **[postman](https://www.postman.com/):** Plataforma usada para testar o projeto.
- **[Express](https://expressjs.com/):** Framework web de código aberto para Node.js que simplifica o desenvolvimento de aplicações e APIs web.

<h2>Como utlilizar</h2>

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Author

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/felipe-aguiar-exe/)                                             |
