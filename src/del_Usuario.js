export class Usuario {
    nome = '';
    papel = '';
    matricula = '';
    historico = [];

    constructor(nome, papel) {
        if (!nome || !papel) {
            throw new Error(
                'Instâncias de \'Usuario\' requerem nome e papel.'
            );
        } else if (
            papel != 'Aluno' &&
            papel != 'Professor' &&
            papel != 'Bibliotecário'
            ) {
            throw new Error(
                'O papel do usuário dever ser necessarimente: \'Aluno\' ' +
                'ou \'Professor\' ou \'Bibliotecário\'.'
            );
        }
        this.nome = nome;
        this.papel = papel;
    }
}