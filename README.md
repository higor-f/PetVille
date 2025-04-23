# 🐾 PetVille - Sistema de Gestão para Petshops 

[![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-blue)](https://www.mysql.com/)

PetVille é um sistema web completo para gerenciamento de serviços em petshops e clínicas veterinárias. Ele permite aos usuários agendarem atendimentos para seus pets, acompanharem status, e gerenciarem seu perfil, tudo isso com uma interface intuitiva e responsiva.

---

## ✨ Funcionalidades

- 🐶 Cadastro de pets com informações completas
- 📅 Agendamento de serviços (banho, tosa, consulta, etc.)
- 🔐 Login com autenticação via JWT
- 👤 Área do cliente com painel de agendamentos
- 🧑‍⚕️ Painel administrativo (em construção)
- 📬 Formulário de contato
- 📱 Layout responsivo (mobile-friendly)

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, Bootstrap, JavaScript, EJS
- **Backend:** Node.js, Express
- **Banco de Dados:** MySQL
- **Outros:** bcrypt, JWT, dotenv

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

- Node.js (versão 18.x)
- MySQL instalado e configurado

### 📦 Instalação

  ```bash

1. Clone o repositório:
 git clone https://github.com/higor-f/PetVille.git

2. Acesse a pasta do projeto
cd PetVille

3. Instale as dependências
npm install

4. Configure o arquivo .env (copie o exemplo)
cp .env.example .env

DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=petville
JWT_SECRET=segredo_ultrasecreto_123
PORT=3000  


5. Inicie o servidor
npm start

