import { Biblioteca } from "./src/Biblioteca.js";

// Funcoes de Teste:
import { 
    cadastrarLivros,
    cadastrarAutores,
    cadastrarUsuarios,
} from "./tests/cadastro.js";
import { fazerEmprestimos } from "./tests/operacao.js";

const biblioteca = new Biblioteca();


cadastrarAutores(biblioteca);
cadastrarLivros(biblioteca);    // tests/cadastro.js
cadastrarUsuarios(biblioteca);  // tests/cadastro.js
//console.log(biblioteca.listaUsuarios);

fazerEmprestimos(biblioteca);   // tests/operacao.js
console.log(biblioteca);


//
//const listaUsuario = biblioteca.listaUsuarios;
//console.log(listaUsuario);
//
//biblioteca.gerarRelatorioUsuario();
