*****COMANDOS BASICOS DOCKER PARA DATABASES

***POSTGRESQL

cria image do postgres

        docker run \
        --name postgres \
        -e POSTGRES_USER=user \
        -e POSTGRES_PASSWORD=root \
        -e POSTGRES_DB=teste1 \
        -p 5432:5432 \
        -d \
        postgres:11.5

cria interface do pg

        docker run \
        --name adminer \
        -p 8080:8080 \
        --link postgres:postgres \
        -d \
        adminer

login interface do pg

    sistema: PostgreSQL
    servidor: postgres
    usuario: user
    senha: root
    base de dados: teste1

**************************************************************************************************

***MONGODB

cria imagem do mongo

        docker run \
        --name mongodb \
        -p 27017:27017 \
        -e MONGO_INITDB_ROOT_USERNAME=admin \
        -e MONGO_INITDB_ROOT_PASSWORD=root \
        -d \
        mongo:4

cria interface do mongo com usario root

        docker run \
        --name mongoclient \
        -p 3000:3000 \
        --link mongodb:mongodb \
        -d \
        mongoclient/mongoclient

cria interface mongo com usario inicial sendo atraves dele e permissao cria outros -u nome_usuario -p senha_do_usuario

        docker exec -it mongodb \
        mongo --host localhost -u admin -p root \
        --authenticationDatabase admin \
        --eval "db.getSiblingDB('teste2') \
        .createUser({user:'user', pwd:'root',\
        roles: [{role: 'readWrite', db: 'teste2'}]})"

***login na interface mongodb

1 login user root

mongoDB

*aba.: connection

    host/port: mongoDB 27017
    database name: admin

*aba.: authentication

    authentication type: scram-sha1
    username: admin
    password: root
    authentication db: admin

2 login user

mongodb-readWhite 

*aba.: connection

    host/port: mongodb 27017
    database name: teste2

*aba.: authentication

    authentication type: scram-sha1
    username: user
    password: root
    authentication db: teste2


*************************************************************************************************

***REDIS

imagem

    docker pull redis

seta nome e porta a imagem

    docker run -d -p 6379:6379 --name redis redis 

iniciar redis-cli

    docker exec -it redis sh

    #redis-cli

teste se esta ok

    127.0.0.1:6379> ping

