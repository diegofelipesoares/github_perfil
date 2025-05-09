 GitHub Perfil Viewer

Projeto em React + Vite para exibir informações públicas de perfis do GitHub.

## 🚀 Sobre o Projeto

Esta aplicação permite buscar usuários do GitHub e visualizar seus repositórios públicos. A interface foi construída com React e estilizada com CSS Modules, com foco em responsividade e experiência do usuário.

## 🧪 Funcionalidades

- 🔍 Buscar perfil de usuário do GitHub.
- 📦 Listagem dos repositórios públicos.
- 📁 Informações de cada repositório:
  - Nome
  - Descrição
  - Linguagem principal
  - Link para o repositório
- 📱 Responsivo para dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

<div align="left">

<a href="https://reactjs.org/" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" />
</a>

<a href="https://vitejs.dev/" target="_blank">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="40" />
</a>

<a href="https://github.com/css-modules/css-modules" target="_blank">
  <img src="https://avatars.githubusercontent.com/u/9981606?s=200&v=4" alt="CSS Modules" width="40" />
</a>

</div>

- **React** – Biblioteca para construção de interfaces.
- **Vite** – Ferramenta de bundling rápida para projetos modernos.
- **CSS Modules** – Estilização com escopo local.
- **Fetch API** – Utilizada para consumir a API pública do GitHub.

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/diegofelipesoares/github_perfil.git
cd github_perfil

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

## 📁 Estrutura de Pastas

github_perfil/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas principais
│   ├── styles/           # Estilos CSS Modules
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Ponto de entrada da aplicação
├── public/               # Arquivos estáticos
├── index.html            # HTML base
└── vite.config.js        # Configuração do Vite

## 📸 Demonstração do projeto
https://github-perfil-murex.vercel.app/

## 🙋‍♂️ Autor
Desenvolvido por Diego Felipe Soares 🚀