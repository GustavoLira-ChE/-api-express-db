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

Create a `.env` file, you need to add the next line, modifying your postgresUser and your password
```
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
```

If you want to try this project easier, you can use [POSTMAN](https://www.postman.com/) to run send HTTP request to the endpoint.

## API endpoints
|Type|Route|Body|
|-----|-----|-----|
| Get explorers or users | localhost:PORT/explorers or localhost:PORT/users | Do not apply |
| Get explorer or user by ID | localhost:PORT/explorers/id or localhost:PORT/users/id | Do not apply |
| Create a new explorer or user | localhost:PORT/explorers or localhost:PORT/users |`{name: name, username: username, mission: mission}` or `{name: name, lang: lang, missionComander: commander, enrollments: 1}` |
| Update a explorer mission or user missionComander by ID | localhost:PORT/explorers/1 or localhost:PORT/users/1 | `{mission: mission}` or `{missionComander: commander}` |
| Delete a explorer or user by ID | localhost:PORT/explorers/1 or localhost:PORT/users/1 | Do not apply |
