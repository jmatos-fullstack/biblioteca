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

    fazerEmprestimo(matriculaUsuario, codigoLivro) {
        //console.log(this.#usuarios);
        const usuario = this.#usuarios.find(usuario => usuario.matricula === matriculaUsuario);
        console.log(usuario);
        if (!usuario) {
            throw new Error('Usuário não encontrado.');
        }

        const livro = this.#livros.find(livro => livro.codigo === codigoLivro);
        console.log(livro);
        if (!livro) {
            throw new Error('Livro não encontrado.');
        }

        if (!livro.disponibilidade) {
            throw new Error('Livro indisponível para empréstimo.');
        }

        // Atualiza a disponibilidade do livro
        livro.disponibilidade = false;

        // Adiciona o livro ao histórico do usuário
        usuario.historico.push(`Empréstimo do livro: "${livro.titulo}" (Código: ${livro.codigo})`);
        
    }
    
    // --==-- Relatórios:
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
