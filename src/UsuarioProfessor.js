import { Usuario } from "./Usuario.js";

export class UsuarioProfessor extends Usuario {
    constructor(nome) {
        super(nome, 'Professor');
    }

    getLimiteEmprestimos() {
        return 5; // Professor pode pegar até 5 livros
    }
}