const argv = require("yargs")
  .command("crear", "Crear un elemento TODO", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion del TODO",
    },
  })
  .command("actualizar", "Actualizar el estado completado de un TODO", {
    descripcion: {
      demand: true,
      alias: "d",
      desc: "Descripcion del TODO",
    },
    completado: {
      default: true,
      alias: "c",
      desc: "Marca como completado o pendiente el TODO",
    },
  })
  .command('borrar','Borra un elemento TODO',{
    descripcion:{
      demand: true,
      alias: 'd',
      desc: 'Borra el TODO seleccionado'
    }
  })
  .help().argv;

  module.exports = {
      argv
  }