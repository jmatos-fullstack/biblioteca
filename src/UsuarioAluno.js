import { Usuario } from "./Usuario.js";

export class UsuarioAluno extends Usuario {
    constructor(nome) {
        super(nome, 'Aluno');
    }

    getLimiteEmprestimos() {
        return 3; // Aluno pode pegar até 3 livros
    }
}