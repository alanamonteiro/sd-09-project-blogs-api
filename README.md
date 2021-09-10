# Boas vindas ao repositório do API de Blogs!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---


### COMO RODAR O PROJETO:

1. Clone o repositório

2. Instale as dependências na pasta clonada
  * `npm install`

3. Inicie o projeto
  * `npm start`

---

## Sobre a API:

### 1 - endpoint POST `/user`

- O endpoint adiciona um novo user a sua tabela no banco de dados;

- O corpo da requisição terá o seguinte formato:

  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
  

### 2 - endpoint POST `/login`

- O corpo da requisição seguirá o formato abaixo:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```
- Caso esteja tudo certo com o login, a resposta será um token `JWT`, no seguinte formato:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_
  

### 3 - endpoint GET `/user`

- lista todos os **Users** e retorna-os na seguinte estrutura:

  ```json
  [
    {
      "id": "401465483996",
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

- A requisição deve ter token de autenticação nos headers.


### 4 - Sua aplicação deve ter o endpoint GET `/user/:id`

- Retorna os detalhes do usuário baseado no `id` da rota. Os dados terão o seguinte formato:

  ```json
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

- A requisição deve ter token de autenticação nos headers.


### 5 - Sendpoint POST `/categories`

- Esse endpoint recebe uma _Categoria_ no corpo da requisição e cria-a no banco. O corpo da requisição deve ter a seguinte estrutura:

 ```json
  {
    "name": "Inovação"
  }
  ```

- A requisição deve ter o token de autenticação nos headers.


### 6 - endpoint GET `/categories`

- Esse endpoint lista todas as Categorias e retorna-as na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
```
- A requisição deve ter o token de autenticação nos headers.


### 7 - endpoint POST `/post`

- Esse endpoint recebe um _BlogPost_ no corpo da requisição e cria-o no banco. O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```


- A requisição deve ter o token de autenticação nos headers.


### 8 - endpoint GET `/post`

- Esse endpoint lista todos os _BlogPosts_ e retorna-os na seguinte estrutura:

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

### 9 - endpoint GET `post/:id`

- Retorna um **BlogPost** com o `id` especificado. O retorno terá os seguinte formato:

```json
  {
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

### 10 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- O endpoint recebe um **BlogPost** que irá sobrescrever o original com o `id` especificado na URL. Só será permitido para o usuário que criou o **BlogPost**.

- A(s) categoria(s) do post **não** podem ser editadas, somente o `title` e `content`.

- O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```


### 11 - endpoint DELETE `post/:id`

- Deleta o post com o `id` especificado. Só será permitido para o usuário que criou o **BlogPost**.


### 12 - endpoint DELETE `/user/me`

- Utilizando o token de autenticação nos headers, o usuário correspondente será apagado.

---

## Os testes escritos neste projeto foram criados pela Trybe e usados como base para o desenvolvimento do código.
