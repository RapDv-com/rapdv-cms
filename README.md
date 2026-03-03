# RapDv - Blog CMS

The quickest way to deploy your own blog! It's an example application that uses [RapDv - Rapid Development Framework](https://rapdv.com).

## Demo
[https://cms.rapdv.com](https://cms.rapdv.com)  
  
## Before running it
- Install RapDv submodule: `git submodule update --init --recursive`.
- Install all dependencies: `npm install`
- Start PostgreSQL (see below)
- Copy `.env.example` to `.env`, and set correct values in `.env` file

### To start PostgreSQL database locally in dev mode
`docker run -d --name db-rapdv-cms-dev -e POSTGRES_DB=rapdv-cms-dev -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 postgres`

Run migrations
```
export DATABASE_URL=postgresql://postgres:postgres@localhost:5432/rapdv-cms-dev
npm run migration:generate
npm run migration:run
```

## Run application in development
`npm start`

## Run application in production
`npm run start-prod`

## Application structure
- Back-end code is in `server` folder
- Front-end code is in `client` folder. After modifying client code, you need to run `npm run build-prod` to rebuild it.

### Coding style
- Every file needs to have name in PascalCase and be a class
- All code should be writted in an object-oriented way, and all functions should be methods of a class
