import { Usuario } from "./src/Usuario.js";
import { Biblioteca } from "./src/Biblioteca.js";
import {
    cadastrarUsuarios
} from "./tests/testes.js";


const biblioteca = new Biblioteca();

cadastrarUsuarios(biblioteca);



//console.log(usuario);


const listaUsuario = biblioteca.listarUsuarios();
//console.log(biblioteca['usuarios']);
//console.log(listaUsuario);

listaUsuario.forEach ((itemUsuario, index, array) => {
    // Função para atualizar o componente na página
    var listaHistorico = '';
    if (itemUsuario.historico.length < 1) {
        listaHistorico = ' ( Não há histórico de empréstimo ) ' + '\n';
    } else {
        itemUsuario.historico.forEach((itemHistorico)=>{
            listaHistorico += ' --- ' + itemHistorico + '\n';
        });
    };
    
    const usuario = 
    '--=='.repeat(10) + '\n' +
    ' Nome      : ' + itemUsuario.nome + '\n' +
    ' Matricula : ' + itemUsuario.matricula + '\n' +
    ' Historico : ' + '\n' + listaHistorico + '\n' +
    '-^'.repeat(20) + '\n\n\n';

    console.log(usuario);
   
});
