// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;

let comando = argv._[0];

switch (comando) {
  case "crear":
    console.log("Crear Todo");
    break;
  case "listar":
    console.log("Mostrar tareas por hacer");
    break;
  case "actualizar":
    console.log("Actualizar Todo");
    break;
  default:
    console.log("Comando no es reconocido");
}
