create database users_db

create table users(
id serial primary key,
cedula_identidad varchar(50),
nombre varchar(50),
primer_apellido varchar(50),
segundo_apellido varchar(50),
fecha_nacimiento date
);

select * from users

insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Claudia', 'Menacho', 'Parada', '10-12-1990');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Martin', 'Mendez', 'Lujan', '15-05-1980');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Daniela', 'Villanueva', 'Suarez', '02-03-1975');
insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento )
values ('8425126', 'Maria René', 'Prado', 'sanchez', '25-07-1991');



SELECT AVG(EXTRACT(YEAR FROM AGE(NOW(),
fecha_nacimiento))) AS promedio_edades FROM users;



