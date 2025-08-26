export class Autor {
    sobrenome = '';
    nome = '';
    nacionalidade = '';
    codigo = 0;

    constructor(sobrenome, nome, nacionalidade) {
        if (!sobrenome || 
            !nome || 
            !nacionalidade) {
          throw new Error(
            'Instâncias de \'Autor\' requerem nome, sobrenome e nacionalidade.'
        );
        }
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nacionalidade = nacionalidade;
    }
}