import { Usuario } from "./src/Usuario.js";
import { Biblioteca } from "./src/Biblioteca.js";

const biblioteca = new Biblioteca();

const usuario1 = new Usuario("julio", "usr001", [12, 13, 14]);
const usuario2 = new Usuario("ana", "usr002");
const x = new Usuario()

//console.log(usuario);
biblioteca.cadastrarUsuario(usuario1);
biblioteca.cadastrarUsuario(usuario2);

console.log(biblioteca['usuarios']);