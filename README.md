# GuessCAT Game [WEB]

![status](https://img.shields.io/badge/status-in%20development-orange?sty)
[![Portuguese](https://img.shields.io/badge/lang-pt-brightgreen?style=flat-square)](translations/README-ptBR.md)
![license](https://img.shields.io/badge/license-MIT-blue)

## Description

This project is a reimagining of the site [Termo](https://term.ooo/). It provides a frontend built with Angular and styled with SCSS.
It consumes the backend API [GuessCat](https://github.com/eriksgda/API-guesscat) via Angular Services, using HttpClient to fetch and send user and game data.
Routing is secured with Guards, which blocks unauthorized users to the login/sign-up screen.


### Game logic:

A random word is selected, and the player has a number of attempts equal to the word's length to guess it.

## Technologies and Prerequisites

- Angular | 19.1.6+
- TypeScript 
- Node | 16+
- Scss 
- Html5

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/eriksgda/WEB-guesscat.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the application:
    ```bash
    ng serve
    ```
4. Verify:

   The project should now be accessible at http://localhost:4200 (To use authenticated functions requires API running).

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
