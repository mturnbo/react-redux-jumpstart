# React Redux Jumpstart

This is a boilerplate for building a React / Redux application.

## Features:
* React 16
* Redux
* Babel - ES6, ESNext, Airbnb and React/Recommended config
* Webpack 4 with Webpack Dev Server
* ESLint with Airbnb's style 
* SCSS Styling
* Jest with Enzyme

## Quick Start
1. Clone this repo using `git clone https://github.com/mturnbo/react-redux-jumpstart.git`
1. Run `yarn` or `npm install` to install dependencies
1. Run `npm run dev` or `yarn dev` to see the example app at `http://localhost:3000`

## Docker Configuration
A Docker configuration is including to run with nginx inside a container:
1. Build project with `npm run build` or `yarn build`
1. Build Docker image with `docker build -t react-redux-jumpstart:latest .`
1. Run `docker run -it -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 8081:8081 --rm react-redux-jumpstart:latest`

## License
MIT license, Copyright (c) 2019 Marcus Turnbo.
