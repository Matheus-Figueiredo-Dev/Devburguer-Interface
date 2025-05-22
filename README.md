🍔 DevBurguer - Interface (Front-End)
Este é o front-end do projeto DevBurguer, uma aplicação completa que simula o funcionamento de uma hamburgueria real. A interface foi construída com React.js, focando na experiência do usuário, responsividade, integração com a API e design moderno.

🎯 Objetivo
Desenvolver uma interface funcional e responsiva que permita a navegação fluida por menus, visualização de produtos, adição ao carrinho, simulação de compra, além do gerenciamento da aplicação por parte dos administradores.

⚙️ Tecnologias Utilizadas
- React.js – Biblioteca principal;
- Styled-Components – Estilização com CSS-in-JS
- React Router DOM – Navegação entre páginas;
- React-Multi-Carousel – Carrossel de produtos;
- Material UI (MUI) – Componentes visuais prontos e acessíve;
- React Toastify – Notificações personalizadas;
- Prop-Types – Validação de props;
- Yup – Validação de formulários;
- Axios – Requisições HTTP para API;

📌 Funcionalidades
- Página inicial com destaque para os principais produtos.
- Visualização por categorias (hambúrgueres, bebidas, sobremesas, etc).
- Carrossel dinâmico de produtos.
- Carrinho de compras com exibição do valor total e quantidade.
- Login e cadastro de usuários.

- Tela administrativa com opções para:
- Gerenciar produtos;
- Categorias;
- Verificar pedidos;
- Integração completa com o back-end via Axios;
- Notificações com Toastify para ações do usuário (sucesso, erro, etc);
- Navegação fluida e rotas protegidas com React Router DOM;

🧠 Aprendizados
- Aplicação completa de React com navegação e consumo de API
- Componentização e organização de pastas e arquivos.
- Uso de bibliotecas modernas para melhorar a usabilidade e manutenibilidade.
- Gerenciamento de estados de forma eficiente.
- Validação de formulários com feedback amigável.
- Separação entre áreas públicas e administrativas.

![image](https://github.com/user-attachments/assets/f232c301-45a3-440a-a188-0117c75f178e)

![image](https://github.com/user-attachments/assets/1d768f92-0e07-47a5-b349-3064cf36ce05)

![image](https://github.com/user-attachments/assets/9ce5e002-b3d2-449d-9f1b-e4548d482ed1)

![image](https://github.com/user-attachments/assets/b4f5f478-3771-4c82-a62e-0193a88cd72a)

![image](https://github.com/user-attachments/assets/744ca3a9-d279-43bd-939c-79778b3bc109)

![image](https://github.com/user-attachments/assets/57d854e6-2d50-41ee-92d3-07f5c0b25622)

📍 Status
✅ Projeto finalizado com todas as funcionalidades principais. Integrado ao back-end e pronto para simular o funcionamento de uma hamburgueria de verdade.

## ⚙️ Como executar o projeto

1. **Clone o repositório**:

```bash
git clone https://github.com/Matheus-Figueiredo-Dev/Devburguer-interface.git
cd Devburguer-interface

2. **Instale as dependências**:
yarn

3. **Configure a URL base da API**:
Crie um arquivo .env na raiz do projeto com a variável abaixo:

REACT_APP_API_URL=http://localhost:3000

Ajuste a URL caso sua API esteja rodando em outro endereço ou porta.

4. **Inicie a aplicação**:
yarn dev
