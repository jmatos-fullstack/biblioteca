import { Biblioteca } from "./src/Biblioteca.js";

// Funcoes de Teste:
import { cadastrarLivros, cadastrarUsuarios } from "./tests/cadastro.js";
import { fazerEmprestimos } from "./tests/operacao.js";

const biblioteca = new Biblioteca();

cadastrarLivros(biblioteca);    // tests/cadastro.js
cadastrarUsuarios(biblioteca);  // tests/cadastro.js

fazerEmprestimos(biblioteca);   // tests/operacao.js

//console.log(biblioteca);
//
//const listaUsuario = biblioteca.listaUsuarios;
//console.log(listaUsuario);
//
//biblioteca.gerarRelatorioUsuario();
