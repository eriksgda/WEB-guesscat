# GuessCAT Game [WEB]

![status](https://img.shields.io/badge/status-em%20desenvolvimento-orange?sty)
[![English](https://img.shields.io/badge/lang-en-blue?style=flat-square)](../README.md)
![license](https://img.shields.io/badge/license-MIT-blue)

## Descrição

Este projeto é uma reimaginação do site [Termo](https://term.ooo/).  
Ele fornece um frontend construído com Angular e estilizado com SCSS.  
O sistema consome a API backend [GuessCat](https://github.com/eriksgda/API-guesscat) por meio de Angular Services, utilizando o HttpClient para buscar e enviar dados de usuários e do jogo.  
O roteamento é protegido com Guards, que bloqueiam usuários não autorizados, redirecionando-os para a tela de login/cadastro.

### Lógica do jogo:

Uma palavra aleatória é selecionada, e o jogador tem um número de tentativas igual ao tamanho da palavra para adivinhá-la.

## Tecnologias e Pré-requisitos

- Angular | 19.1.6+
- TypeScript
- Node | 16+
- Scss
- Html5

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/eriksgda/WEB-guesscat.git
    ```
2. Instale as dependências:
    ```bash
    npm install
    ```
3. Inicie a aplicação:
    ```bash
    ng serve
    ```
4. Verifique:

   O projeto deve estar acessível em http://localhost:4200  
   (Para utilizar as funções autenticadas, é necessário que a API esteja em execução).

## Licença

Este projeto está licenciado sob a licença MIT — veja o arquivo [LICENSE](../LICENSE) para mais detalhes.
