# RapDv - Blog CMS

The quickest way to deploy your own blog! It's an example application that uses [RapDv - Rapid Development Framework](https://rapdv.com).

## Demo
[https://cms.rapdv.com](https://cms.rapdv.com)  
  
## Before running it
- Install RapDv submodule: `git submodule update --init --recursive`.
- Install all dependencies: `npm install`
- Start MariaDB (see below)
- Copy `.env.example` to `.env`, and set correct values in `.env` file

### To start MariaDB database locally in dev mode
`docker run -d --name mariadb -e MARIADB_DATABASE=rapdv-cms-dev -e MARIADB_ROOT_PASSWORD=password -p 3306:3306 mariadb`

Run migrations
```
export DATABASE_URL=mariadb://root:password@localhost:3306/rapdv-cms-dev
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
- Don't use variables with single letter names, except for loop counters. Use descriptive names for variables and functions.
- Don't use magic numbers, use constants with descriptive names instead.
