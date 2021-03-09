<img src="./src/images/pet-icone.png" alt="Logo of the project" align="right">

# Site PET Computação &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Este é o website do PET Computação UFC, um projeto da Universidade Federal do Ceará. Através deste website é possível saber mais sobre o projeto e as atividades realizadas pelo mesmo.

## Acessando

O website deste repositório está disponível no Github Pages em petcompufc.github.io ou, alternativamente, você pode rodar esse website em sua máquina com 

```shell
npm install
npm run serve
```

## Desenvolvimento

### Construido com
- [Gatsby.js](https://www.gatsbyjs.com) 3.0
  - [Preact](https://preactjs.com) X (Similar ao ReactJS, porém mais leve)
  - [GraphQL](https://graphql.org) 
- [Chakra UI](https://chakra-ui.com) 1.0
  - [Emotion](https://emotion.sh/docs/introduction)
  - [Framer Motion](https://www.framer.com/motion/)

### Prerequisitos
Para rodar esse projeto é necessário ter instalado o [node.js](https://nodejs.org/en/) com o Node Package Manager (npm), que deve vir instalado com o Node.

### Configurando o ambiente de desenvolvimento

Para começar a desenvolver, primeiro você precisa preparar o ambiente. Para isso clone o projeto e instale as dependências (inclusive as de desenvolvimento):

```shell
git clone https://github.com/petcompufc/petcompufc.github.io
cd petcompufc.github.io
npm install -D
```

O servidor de desenvolvimento pode ser iniciado com:

```shell
npm run develop
```

Agora deve estar rodando um servidor em localhost:8000 mostrando em tempo real as mudanças que você fizer. Cuidado, pois nem sempre o que aparece no servidor de desenvolvimento fica igual na build, teste a build antes de realizar um merge para a página principal.

Para uma melhor qualidade de código, é recomendável fazer uso do ESLint. Vários editores e IDEs possuem suporte para ESLint nativo ou através de plugins. Caso você tenha instalado as dependências de desenvolvimento, o ESLint estará pronto para ser utilizado.

### Construção

Ao terminar todas as suas alterações, para gerar o site estático basta rodar:

```shell
npm run build
```

Esse comando gerará os arquivos na pasta `public`, de onde poderão ser copiados para o servidor

### Publicação

Para publicar o site após a construção, basta copiar os arquivos da pasta `public` para o servidor que está hospedando o website

## Tests

Os testes ainda não estão prontos, porém poderão ser futuramente rodados com:

```shell
npm run test
```

## Guia de Estilo

Esse projeto faz uso do [guia de estilo do Airbnb](https://airbnb.io/javascript/react/)


## Licença

O código deste website é aberto e, mediante termos da licença MIT, garante aos usuários quase todos os direitos sobre o software, exceto a garantia