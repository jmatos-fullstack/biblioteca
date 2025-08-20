//import { Usuario } from "./Usuario.js";

export class Biblioteca {
    #usuarios = [];
    #livros = [];
    #sequencialUsuarios = 0;
    constructor() {
        this.#usuarios = [];
        this.#livros = [];
    }

    listarUsuarios() {
        return this.#usuarios;
    }

    cadastrarUsuario(usuario) {
        this.#usuarios.push(usuario);
    }

    cadastrarLivro(livro) {
        this.#livros.push(livro);
    }
    
}
