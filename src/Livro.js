export class Livro {
    titulo = '';
    autor = '';
    disponibilidade = true;
    codigo = 0;

    constructor(titulo, autor, disponibilidade) {
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