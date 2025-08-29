import { Biblioteca } from "./src/Biblioteca.js";

// Funcoes de Teste:
import { 
    cadastrarLivros,
    cadastrarAutores,
    cadastrarUsuarios,
} from "./tests/cadastro.js";

import { 
    fazerAlgumasDevolucoes,
    fazerEmprestimos 
} from "./tests/operacao.js";

import { 
    listaHistoricoUsuarios
} from "./tests/consulta.js";

const biblioteca = new Biblioteca();

console.clear(); 

cadastrarUsuarios(biblioteca);      // tests/cadastro.js
cadastrarAutores(biblioteca);       // tests/cadastro.js
cadastrarLivros(biblioteca);        // tests/cadastro.js

fazerEmprestimos(biblioteca);       // tests/operacao.js
fazerAlgumasDevolucoes(biblioteca); // tests/operacao.js

listaHistoricoUsuarios(biblioteca); // tests/consulta.js




//
//const listaUsuario = biblioteca.listaUsuarios;
//console.log(listaUsuario);
//
//biblioteca.gerarRelatorioUsuario();
