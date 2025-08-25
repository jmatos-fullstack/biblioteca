export class Autor {
    sobrenome = '';
    nome = '';
    nacionalidade = '';
    codigo = 0;

    constructor(sobrenome, nome, nacionalidade) {
        if (!titulo || 
            !autor || 
            !disponibilidade) {
          throw new Error(
            'Instâncias de \'Livro\' requerem título, autor e disponibilidade.'
        );
        }
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidade = disponibilidade;
    }
}