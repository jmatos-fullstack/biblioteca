//import { Usuario } from "./Usuario.js";

export class Biblioteca {
    #usuarios = [];
    #livros = [];
    constructor() {

    }

    cadastrarUsuario(usuario) {
        this.#usuarios.push(usuario);
    }
}
