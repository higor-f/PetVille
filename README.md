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

## 🖼️ Capturas de Tela

### 🏠 Página Inicial

Tela de boas-vindas com mensagem institucional e opções para criação de conta ou login.

![image](https://github.com/user-attachments/assets/37861487-b508-4dfd-ba3e-c5754c925c71)


---

### 📝 Página de Cadastro

Formulário para criação de nova conta, com campos de nome, e-mail, senha e aceite dos termos de uso.

![image](https://github.com/user-attachments/assets/3967b743-5352-4b51-84ca-d112b4ef9e7f)


---

### 🔐 Página de Login

Tela de autenticação com opção de lembrar senha e link para recuperação.

![image](https://github.com/user-attachments/assets/64bb4907-bf6c-4bd6-918b-4a4044165102)


---

### 📋 Painel do Usuário

Dashboard com agendamentos realizados, formulário para novo agendamento, e menu lateral com dados do usuário logado.

![image](https://github.com/user-attachments/assets/65eeabdc-c61f-44e1-9b07-ac965a4c4cd4)

### 📦 Instalação

  ```bash

1. Clone o repositório:
 git clone https://github.com/higor-f/PetVille.git

2. Acesse a pasta do projeto:
cd PetVille

3. Instale as dependências:
npm install

4. Configure o arquivo .env (copie o exemplo):
cp .env.example .env

DB_HOST=localhost
DB_USER=root
DB_PASS=sua_senha
DB_NAME=petville
JWT_SECRET=segredo_ultrasecreto_123
PORT=3000  


5. Inicie o servidor:
npm start

