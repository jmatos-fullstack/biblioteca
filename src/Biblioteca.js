//import { Usuario } from "./Usuario.js";

export class Biblioteca {
    #usuarios = [];
    #livros = [];
    #sequencialUsuarios = 0;
    constructor() {

    }

    listarUsuarios() {
        return this.#usuarios;
    }

    cadastrarUsuario(usuario) {
        this.#usuarios.push(usuario);
        //return this.usuarios;
    }
    
}
