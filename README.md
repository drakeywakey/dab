start a postgres container with password set

docker run --name dab-postgres -v C:\Users\dbennion\nodeStuff\dab\data:\var\lib\postgresql\data -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:latest

for now, need to create database 'dab'
can be done in migrations, just need to figure that out

docker exec -it dab-postgres bash
psql -U postgres
CREATE DATABASE dab;

run migrations: 

SET DATABASE_URL=postgres://postgres:password@localhost:5432/dab
npm run migrate up