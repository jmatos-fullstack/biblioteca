//import { Usuario } from "./Usuario.js";

export class Biblioteca {
    #usuarios = [];
    #livros = [];
    static #sequencialUsuarios = 0; // Static para ser "catálogo" único
    static #sequencialLivros = 0    // Static para ser "catálogo" único
    constructor() {
        this.#usuarios = [];
        this.#livros = [];
    }

    get listaUsuarios() {
        return this.#usuarios;
    }

    cadastrarUsuario(usuario) {
        const proximoSequencial = ++Biblioteca.#sequencialUsuarios;
        const stringSequencial = '0000' + proximoSequencial;
        const novaMatricula = usuario.papel.at(0) + stringSequencial;
        usuario.matricula = novaMatricula;
        this.#usuarios.push(usuario);
    }

    cadastrarLivro(livro) {
        const proximoSequencial = ++Biblioteca.#sequencialLivros;
        livro.codigo = proximoSequencial;
        this.#livros.push(livro);
    }

    gerarRelatorioUsuario() {
        const listaUsuario = this.listaUsuarios;

        listaUsuario.forEach ((itemUsuario, index, array) => {
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
    }
    
}
