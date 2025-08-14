class Usuario {
    nome
    matricula
    historico = []
    constructor(nome, matricula, historico) {
        this.nome = nome;
        this.matricula = matricula;
        this.historico = historico;
    }
}
export default Usuario;