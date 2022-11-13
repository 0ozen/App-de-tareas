# app de tareas

### en la parte de backend

se debe crear un .env con los siguientes datos:

```
DB_HOST = localhost
DB_USER = ???
DB_PASSWORD = ???
DB = ???
```

es necesario crear 2 tablas en mysql, una para guardar el historial y la otra para las tareas que pueden eliminarse,
el nombre de las tablas debe ser

- history
- text2

```
create table "nombre de la tabla"(
    id  int auto_increment,
    title varchar(100) not null,
    text varchar(1000) not null,
    primary key(id)
)
```

#### despues de instalar las dependencias con npm i

es necesario ejecutar dentro de la carpeta frontend "npm start" y dentro de la carpeta backend el
archivo routes "node routes.js"
