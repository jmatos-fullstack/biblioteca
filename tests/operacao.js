import { Usuario } from "../src/Usuario.js";
import { Livro } from "../src/Livro.js";

export function fazerEmprestimos(biblioteca) {
    // Botar um tryh/catch...
    // Tenta fazer 50 empréstimos aleatórios...
    const usuarios = biblioteca.listaUsuarios;
    
    // const aleatorio = Math.floor(Math.random()*50);
    // const usuarioAleatorio = usuarios.find(
    //     usuario => parseInt(usuario.matricula.slice(-5)) === aleatorio
    // );
    // //
    // const livroAleatorio = Math.floor(Math.random()*100);

    // console.log(usuarioAleatorio.matricula);
    // console.log(livroAleatorio);
    try {
        biblioteca.fazerEmprestimo('A00002', 1);
        console.log('Emprestimo realizado')
    } catch (error) {
        console.log('Deu erro')
    }
    
    //biblioteca.fazerEmprestimo(usuarioAleatorio.matricula, livroAleatorio);
    
    //   

    // for (let i=1; i <=50; i++) {
    //     const codigo = ;
    //     console.log(codigo);
    
    // }
    
    // biblioteca.fazerEmprestimo('A00001', 1);

    // console.log(biblioteca.consultaLivros());

    // biblioteca.fazerEmprestimo('A00001', 1);
}