# RapDv - Blog

The quickest way to deploy your own blog! It's an example application that uses RapDv - framework for low-code web development.

## Demo
[https://blog.rapdv.com](https://blog.rapdv.com)  
  
## Before running it
- Install RapDv submodule: `git submodule update --init --recursive`. You can also just copy its code to `submodules/rapdv`  
- Install all dependencies: `npm run install-all`  
- Start MongoDB
- Copy `.env.example` to `.env`, and set correct values in `.env files`

## Run application in development
`npm start`

## Run application in production
`npm run start-prod`

## Application structure
- Back-end code is in `server` folder
- Front-end code is in `client` folder. After modifying client code, you need to run `npm run build-prod` to rebuild it.