import { Usuario } from "./src/Usuario.js";
import { Biblioteca } from "./src/Biblioteca.js";

import {
    cadastrarLivros,
    cadastrarUsuarios
} from "./tests/testes.js";

const biblioteca = new Biblioteca();

cadastrarLivros(biblioteca);    // tests/teste.js
cadastrarUsuarios(biblioteca);  // tests/teste.js

console.log(biblioteca);

const listaUsuario = biblioteca.listaUsuarios;
console.log(listaUsuario);

biblioteca.gerarRelatorioUsuario();
