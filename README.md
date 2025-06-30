# API - Exercicio CICD

## Link do Swagger

Acesse a documentação da API pelo Swagger:

➡️ [exercicio-cicd-api.onrender.com/swagger](https://exercicio-cicd-api.onrender.com/swagger)

---

## Como Executar a API

### 1. Usando Docker Compose (Recomendado)

Execute o comando abaixo na raiz do projeto para subir a aplicação e suas dependências:

```bash
docker-compose up -d
```

- Para parar e remover os containers:

```bash
docker-compose down
```

---

### 2. Usando Docker Manualmente

#### a) Construir a imagem Docker

```bash
docker build -t img-api .
```

Cria uma imagem chamada `img-api` a partir do `Dockerfile`.

#### b) Executar o container

```bash
docker run --name cont-api -p 5200:5200 img-api
```

Cria e executa o container `cont-api`, mapeando a porta 5200.

#### c) Remover o container

```bash
docker rm -f cont-api
```

Remove o container `cont-api` (forçado).

#### d) Remover a imagem Docker

```bash
docker rmi img-api
```

Remove a imagem `img-api`.

#### e) Ver logs do container

```bash
docker logs cont-api
```

Exibe os logs do container `cont-api`.

---

## Observações Importantes

- Certifique-se de que nenhuma outra aplicação esteja usando a porta 5200.
- Para reconstruir a imagem após alterações, remova a imagem antiga com `docker rmi` ou use a flag `--no-cache` ao buildar.
- O uso do Docker Compose facilita o gerenciamento de múltiplos serviços e dependências.

---

