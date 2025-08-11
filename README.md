# gemu_web_api

API da versão web do [gemu_iterm](https://github.com/MurilloIDM/gemu_iterm) — ferramenta de controle financeiro pessoal originalmente criada para terminal. Esta API fornece os dados para a interface web.

---

## 🚀 Tecnologias

- 🟦 Node.js + TypeScript – Ambiente de execução e tipagem
- ⚡ Express – Framework leve para rotas HTTP
- 🐘 PostgreSQL – Banco de dados relacional
- 🧬 Prisma – ORM moderno e tipado para TypeScript

---

## 📦 Como rodar localmente

### 1️⃣ Clone o repositório:

```bash
git clone https://github.com/MurilloIDM/gemu_web_api.git
cd gemu_web_api
```

### 2️⃣ Configure as variáveis de ambiente:

```
DATABASE_URL=""
SECRET_JWT=""
PORT=
```

### 3️⃣ Execute o comando para dev:

```bash
npm run dev
```

---

## 📑 Documentação dos serviços:

### **Autenticação**

#### **Login**

`POST /accounts/auth`

```bash
curl -X POST http://localhost:3000/accounts/auth   -H "Content-Type: application/json"   -d '{
    "email": "",
    "password": ""
  }'
```

**Resposta:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

⚠️ Use este token nas próximas requisições:

```bash
-H "Authorization: Bearer <TOKEN>"
```

---

### **Bancos**

#### **Listar Bancos**

`GET /banks`

```bash
curl -X GET http://localhost:3000/banks/   -H "Authorization: Bearer <TOKEN>"
```

---

### **Movimentações**

#### **Listar Movimentações**

`GET /moviments?month=6`

```bash
curl -X GET "http://localhost:3000/moviments?month=6"   -H "Authorization: Bearer <TOKEN>"
```

---

#### **Criar Movimentação**

`POST /moviments`

```bash
curl -X POST http://localhost:3000/moviments   -H "Authorization: Bearer <TOKEN>"   -H "Content-Type: application/json"   -d '{
    "description": "",
    "type": "",
    "value": "",
    "period": "",
    "pay_date": "",
    "bank": {
      "id": null,
      "name": "",
      "code": ""
    }
  }'
```

---

#### **Atualizar Movimentação**

`PUT /moviments/:id`

```bash
curl -X PUT http://localhost:3000/moviments/{ID}   -H "Authorization: Bearer <TOKEN>"   -H "Content-Type: application/json"   -d '{
    "description": "",
    "type": "",
    "value": "",
    "period": "",
    "pay_date": "",
    "bank": {
      "id": null,
      "name": "",
      "code": ""
    }
  }'
```

---

#### **Excluir Movimentação**

`DELETE /moviments/:id`

```bash
curl -X DELETE http://localhost:3000/moviments/{ID}   -H "Authorization: Bearer <TOKEN>"
```

---

### **Notas**

- Valores monetários devem ser enviados como `string` com ponto decimal (`"18000.00"`).
- Datas devem estar em formato ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`).
- Tokens expiram a cada uma hora; faça login novamente quando necessário.

---

### **Testando com VS Code REST Client**

Se você usa a extensão **REST Client** no VS Code, crie um arquivo `requests.http` com o seguinte conteúdo e execute diretamente no editor:

```http
### Login
POST http://localhost:3000/accounts/auth
Content-Type: application/json

{
  "email": "",
  "password": ""
}

### Listar Bancos
GET http://localhost:3000/banks/
Authorization: Bearer {{token}}

### Listar Movimentações
GET http://localhost:3000/moviments?month=6
Authorization: Bearer {{token}}

### Criar Movimentação
POST http://localhost:3000/moviments
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "description": "",
  "type": "",
  "value": "",
  "period": "",
  "pay_date": "",
  "bank": {
    "id": null,
    "name": "",
    "code": ""
  }
}

### Atualizar Movimentação
PUT http://localhost:3000/moviments/{ID}
Authorization: Bearer {{token}}
Content-Type: application/json

{
  "description": "",
  "type": "",
  "value": "",
  "period": "",
  "pay_date": "",
  "bank": {
    "id": null,
    "name": "",
    "code": ""
  }
}

### Excluir Movimentação
DELETE http://localhost:3000/moviments/{ID}
Authorization: Bearer {{token}}
```

Basta substituir `{{token}}` pelo JWT retornado no login.

## 🧠 Autor

Feito com 💙 por [Murillo IDM](https://github.com/MurilloIDM)

---

## 📜 Licença

Distribuído sob a licença MIT. Veja [`LICENSE`](LICENSE) para mais informações.
