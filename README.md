# API de Entrega Colaborativa 📨

<div align="left">
    <img align="center" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
    <img align="center" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img align="center" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img align="center" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
</div>

<br />

A Entrega Colaborativa API é uma plataforma que permite a conexão entre indivíduos e empresas para facilitar a entrega de produtos e serviços, por meio de uma rede de entregadores colaborativos. Esta API foi desenvolvida com TypeScript, Node.JS, PostgreSQL e utiliza o padrão MVC, incluindo o padrão de repository, seguindo a arquitetura sugerida pelo [estilo de arquitetura do governo](https://wiki-coatic.saude.gov.br/backend-node).

## Objetivo

O objetivo da API é permitir que pessoas interessadas em enviar pacotes ou fazer entregas possam se conectar com outras dispostas a transportar esses itens em seus trajetos diários. Isso cria uma rede de entregadores colaborativos que possibilita o transporte de mercadorias de forma mais rápida e eficiente.

## Endpoints

A API possui os seguintes endpoints principais:

- Cadastro de Usuário: Permite que novos usuários sejam cadastrados no sistema, fornecendo nome, email e senha.
- Autenticação de Usuário: Permite que usuários cadastrados façam login no sistema e recebam um token de autenticação.
- Criação de Entrega: Usuários autenticados podem criar solicitações de entrega informando origem, destino, descrição e data prevista.
- Listagem de Entregas: Retorna a lista de todas as entregas cadastradas no sistema.
- Atualização de Status de Entrega: Permite que um entregador atualize o status de uma entrega em andamento.

## Tecnologias Utilizadas

- TypeScript
- Node.JS
- Prisma
- NestJS
- PostgreSQL
- Docker

## Testes Automatizados

A aplicação possui uma suite abrangente de testes automatizados para garantir a estabilidade e confiabilidade do código. Os testes incluem unidades, integração e testes end-to-end para cobrir diferentes aspectos da aplicação.

Para executar os testes, siga as instruções abaixo:

- Certifique-se de ter o ambiente de desenvolvimento configurado.
- Execute o comando: `npm test`

## Como Executar o Projeto

- Certifique-se de ter o Node.JS instalado em sua máquina.
- Clone este repositório: `git clone https://github.com/oliverigor27/API-de-Entrega-Colaborativa.git`
- Acesse o diretório do projeto: `cd entrega-colaborativa-api`
- Instale as dependências: `npm install`
- Configure as variáveis de ambiente (como banco de dados) no arquivo `.env`.
- Execute o servidor: `npm run start:dev`

## Documentação da API

Para mais detalhes sobre os endpoints disponíveis e exemplos de uso, consulte a [Documentação da API](link_para_documentacao).

## Swagger

A API conta com uma documentação interativa utilizando o Swagger. Você pode acessar a documentação em tempo real através do link: [http://localhost:3000/api/v1](http://localhost:3000/api/v1).

## Contribuindo

Contribuições são bem-vindas! Se você deseja colaborar com melhorias, correções de bugs ou adicionar novos recursos, siga as etapas abaixo:

- Faça um fork deste repositório.
- Crie uma branch com sua feature ou correção: `git checkout -b minha-feature`
- Commit suas alterações: `git commit -m "Minha contribuição: descrição da alteração"`
- Envie a branch para o seu fork: `git push origin minha-feature`
- Abra um Pull Request para este repositório.

## Suporte

Em caso de dúvidas ou problemas, entre em contato com a equipe de suporte da API pelo email: igoroliveira2798@gmail.com.

Agradecemos por contribuir com a Entrega Colaborativa API e esperamos que ela seja útil para facilitar a entrega de produtos e serviços de forma colaborativa!
