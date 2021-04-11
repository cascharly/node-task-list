const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripcion del TODO",
};

const completado = {
  default: true,
  alias: "c",
  desc: "Marca como completado o pendiente el TODO",
};

const argv = require("yargs")
  .command("crear", "Crear un elemento TODO", {
    descripcion,
  })
  .command("actualizar", "Actualizar el estado completado de un TODO", {
    descripcion,
    completado,
  })
  .command("borrar", "Borra un elemento TODO", {
    descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
