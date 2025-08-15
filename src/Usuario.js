export class Usuario {
    nome = '';
    matricula = '';
    historico = [];

    constructor(nome, matricula, historico) {
        if (!nome || !matricula || !historico) {
          throw new Error(
            'Instâncias de \'Usuario\' requerem nome, matricula e historico.'
        );
        }
        this.nome = nome;
        this.matricula = matricula;
        this.historico = historico;
    }
}