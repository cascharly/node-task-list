// const argv = require("yargs").argv;
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
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
