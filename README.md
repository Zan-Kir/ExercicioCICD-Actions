# Link Swagger no Render
exercicio-cicd-api.onrender.com/swagger

# Docker - Comandos Úteis para API

Este arquivo contém uma lista de comandos Docker com descrições para facilitar o gerenciamento da sua API containerizada.

## Comandos

### 1. Construir a imagem Docker

```bash
docker build -t img-api .
```

**Descrição:** Cria uma imagem Docker chamada `img-api` a partir do `Dockerfile` localizado no diretório atual.

---

### 2. Executar o container

```bash
docker run --name cont-api -p 5200:5200 img-api
```

**Descrição:** Executa a imagem `img-api` criando um container chamado `cont-api` e mapeando a porta 5200 do host para a porta 5200 do container.

---

### 3. Remover o container

```bash
docker rm -f cont-api
```

**Descrição:** Força a parada e remove o container chamado `cont-api`.

---

### 4. Remover a imagem Docker

```bash
docker rmi img-api
```

**Descrição:** Remove a imagem Docker chamada `img-api` do sistema.

---

### 5. Ver logs do container

```bash
docker logs cont-api
```

**Descrição:** Exibe os logs gerados pelo container `cont-api`.

---

## Observações

* Certifique-se de que nenhuma outra aplicação esteja utilizando a porta 5200.
* Para reconstruir a imagem após alterações, remova a imagem antiga com `docker rmi` ou utilize a flag `--no-cache` na construção.

---

