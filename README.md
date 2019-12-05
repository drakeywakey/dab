start a postgres container with password set

`docker run --name dab-postgres -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:latest`

for now, need to create database 'dab'
can be done in migrations (I assume), just need to figure that out

`docker exec -it dab-postgres bash`

`psql -U postgres`

`CREATE DATABASE dab;`

run migrations: 

`SET DATABASE_URL=postgres://postgres:password@localhost:5432/dab`

`npm run migrate up`

you'll need to add a .env file to the root with all teh secrets


then `npm start` to start this sucker up