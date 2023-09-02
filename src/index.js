const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const conexion = new Pool({
  // user: "postgres",
  // host: "localhost",
  // password: "postgres",
  // database: "users_db",
  // port: "5432",

  user: "nodeapi",
  host: "dpg-cjpnitdhe99c73aj7lmg-a",
  database: "bdapinode",
  password: "SoXXDJrB8IxX5FWfhJWjvHTvagvvuBv3",
  port: "5432",
});

// creamos la clase de modelo para usuarios
class Model {
  async getUsuarios() {
    const { rows } = await conexion.query(
      "select * from users order by id desc;"
    );
    return rows;
  }
  async getUsuario(id) {
    const { rows } = await conexion.query(
      "select * from users where id = $1;",
      [id]
    );
    return rows[0];
  }
  async addUsuario(
    cedula_identidad,
    nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento
  ) {
    await conexion.query(
      "insert into users (cedula_identidad, nombre, primer_apellido, segundo_apellido, fecha_nacimiento) values($1,$2,$3,$4,$5)",
      [
        cedula_identidad,
        nombre,
        primer_apellido,
        segundo_apellido,
        fecha_nacimiento,
      ]
    );
  }
  async updateUsuario(
    id,
    cedula_identidad,
    nombre,
    primer_apellido,
    segundo_apellido,
    fecha_nacimiento
  ) {
    await conexion.query(
      "update users set cedula_identidad=$1, nombre=$2, primer_apellido=$3, segundo_apellido=$4, fecha_nacimiento=$5 where id=$6;",
      [
        cedula_identidad,
        nombre,
        primer_apellido,
        segundo_apellido,
        fecha_nacimiento,
        id,
      ]
    );
  }
  async deleteUsuario(id) {
    await conexion.query("delete from users where id=$1;", [id]);
  }
  async promedioEdad() {
    const { rows } = await conexion.query(
      "SELECT ROUND(AVG(EXTRACT(YEAR FROM AGE(NOW(), fecha_nacimiento))), 1) AS promedioEdad FROM users;"
    );
    return rows[0];
  }
}

//creamos la clase de controlador para usuarios
class Controller {
  constructor(model) {
    this.model = model;
  }
  async getUsuarios(req, res) {
    const data = await this.model.getUsuarios();
    res.send(data);
  }
  async getUsuario(req, res) {
    const { id } = req.params;
    const data = await this.model.getUsuario(id);
    res.send(data);
  }
  async addUsuario(req, res) {
    const { cedula_identidad } = req.body;
    const { nombre } = req.body;
    const { primer_apellido } = req.body;
    const { segundo_apellido } = req.body;
    const { fecha_nacimiento } = req.body;
    await this.model.addUsuario(
      cedula_identidad,
      nombre,
      primer_apellido,
      segundo_apellido,
      fecha_nacimiento
    );
    res.sendStatus(201);
  }

  async updateUsuario(req, res) {
    const { cedula_identidad } = req.body;
    const { nombre } = req.body;
    const { primer_apellido } = req.body;
    const { segundo_apellido } = req.body;
    const { fecha_nacimiento } = req.body;
    const { id } = req.params;
    await model.updateUsuario(
      id,
      cedula_identidad,
      nombre,
      primer_apellido,
      segundo_apellido,
      fecha_nacimiento
    );
    res.sendStatus(200);
  }

  async deleteUsuario(req, res) {
    const { id } = req.params;
    await this.model.deleteUsuario(id);
    res.sendStatus(204);
  }
  async promedioEdad(req, res) {
    const data = await this.model.promedioEdad();
    res.send(data);
  }
}

// instanciamos model y controller
const model = new Model();
const controller = new Controller(model);

app.use(express.json());

//configraucion cors
// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// creamos las rutas URL

app.get("/usuarios/promedio_edad", controller.promedioEdad.bind(controller));
app.get("/usuarios", controller.getUsuarios.bind(controller));
app.get("/usuarios/:id", controller.getUsuario.bind(controller));
app.post("/usuarios", controller.addUsuario.bind(controller));
app.put("/usuarios/:id", controller.updateUsuario.bind(controller));
app.delete("/usuarios/:id", controller.deleteUsuario.bind(controller));
app.get("/estado", function (req, res) {
  res.json({
    nameSystem: "api-usuarios",
    version: "0.0.1",
    developer: "Orlando Quispe Chura",
    email: "softorlando@gmail.com",
  });
});

app.listen(port, () => {});
console.log(`Todo ok http://localhost:${port}`);
