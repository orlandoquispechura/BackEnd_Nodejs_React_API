# BackEnd_Nodejs_React_API
Proyecto en Nodejs + express realizando Api (CRUD) usuarios, estado, promedioEdad

- Repositorio Frontend React                https://github.com/orlandoquispechura/FrontEnd_React_Node_API
- Repositorio Backend  Nodejs + express     https://github.com/orlandoquispechura/BackEnd_Nodejs_React_API

 
1.- crear la base de datos Postgres    CREATE DATABASE usersapi
2.- script para crear la tabla 
/*  create table users(
id serial primary key,
cedula_identidad varchar(50),
nombre varchar(50),
primer_apellido varchar(50),
segundo_apellido varchar(50),
fecha_nacimiento date
); */

3.- script para agregar datos de prueba 
/* 
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Claudia', 'Menacho', 'Parada', '10-12-1990');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Martin', 'Mendez', 'Lujan', '15-05-1980');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Daniela', 'Villanueva', 'Suarez', '02-03-1975');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Maria René', 'Prado', 'sanchez', '25-07-1991');
*/

4.- ENPOINT
- mostrar promedio edad        Method GET    http://localhost:3000/users/promedio_edad
- crear un usuario             Method POST   http://localhost:3000/users
- listar todos los usuarios    Method GET    http://localhost:3000/users
- mostrar un solo usuario      Method GET    http://localhost:3000/users/:id
- Acualizar un usuarios        Method PUT    http://localhost:3000/users/:id
- Eliminar un usuario          Method DELETE http://localhost:3000/users:id
- mostrar estado system        Method GET    http://localhost:3000/estado


