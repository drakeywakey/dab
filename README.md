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

you'll need to add a .env file to the root with all teh secrets.
the PG* config is especially important -- the postgres pooling requires those environment variables


then `npm start` to start this sucker up

hella useful things for k8s:
    remember to start minikube with: minikube start --vm-driver=hyperv
    # this was vv helpful https://levelup.gitconnected.com/deploying-dockerized-golang-api-on-kubernetes-with-postgresql-mysql-d190e27ac09f
    # also this https://medium.com/@maumribeiro/running-your-own-docker-images-in-minikube-for-windows-ea7383d931f6

    connect directly to a pod: kubectl exec -it pod-name bash (just like docker! yay)
        for now I probably either need to create the database by hand or idk

hella useful for pg command line:
    \c db # connect to db
    \dt # show tables in db

setup for k8s: have all them yaml files
    kubectl apply -f postgres-*.yaml # do this for each postgres yaml file
    then directly connect to the postgres pod and create the database 'dab'