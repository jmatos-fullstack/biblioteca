export class Livro {
    autorSobrenome = '';
    autorNome = '';
    titulo = '';
    disponibilidade = true;
    codigo = 0;

    constructor(autorSobrenome, autorNome, titulo, disponibilidade) {
        if (!autorSobrenome || 
            !autorNome ||
            !titulo || 
            !disponibilidade) {
          throw new Error(
            'Instâncias de \'Livro\' requerem título, nome e sobrenome do autor e disponibilidade.'
        );
        }
        this.autorSobrenome = autorSobrenome;
        this.autorNome = autorNome;
        this.titulo = titulo;
        this.disponibilidade = disponibilidade;
    }
}