# api-express-db
A project to build an API and connect it with a PostgreSQL database.

## Package used
- ***Prima***: use to link postgreSQL DB with the server.
- ***Express***: use to create a server and APIs.

## How you can use it.

### Prerequirements
Its necessary have installed postgreSQL and create a DB, in this case the DB was named "explorers_api"

### Start using
Ones you have this project in your own computer in the root of the project
Run:
```
npm install
```

Create a `.env` file, you need to add the next line, modified your postgresUser and your password
```
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
```

If you want to try this project easier, you can use POSTMAN to run send HTTP request to the endpoint.

## API endpoints
|Type|Route|
|-----|-----|
|Get explorers or users| localhost:PORT/explorers or localhost:PORT/users| 
