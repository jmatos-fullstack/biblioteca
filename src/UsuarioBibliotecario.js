import { Usuario } from "./Usuario.js";

export class UsuarioBibliotecario extends Usuario {
    constructor(nome) {
        super(nome, 'Bibliotecário');
    }

    getLimiteEmprestimos() {
        return 1; // Bibliotecário pode pegar apenas 1 livro
    }
}