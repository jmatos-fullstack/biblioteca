export class Biblioteca {
    #usuarios = [];
    #autores = [];
    #livros = [];
    static #sequencialUsuarios = 0; // Static para ser "catálogo" único
    static #sequencialAutores = 0;  // Static para ser "catálogo" único
    static #sequencialLivros = 0    // Static para ser "catálogo" único
    constructor() {
        this.#usuarios = [];
        this.#autores = [];
        this.#livros = [];
    }

    get listaUsuarios() {
        return this.#usuarios;
    }

    get listaAutores() {
        return this.#autores;
    }

    get listaLivros() {
        return this.#livros;
    }

    cadastrarUsuario(usuario) {
        if (this.#usuarios.find(u => u.nome === usuario.nome)) {
            throw new Error('Usuário já consta da base.');
        } 
        const proximoSequencial = ++Biblioteca.#sequencialUsuarios;
        const stringSequencial = '0000' + proximoSequencial;
        const novaMatricula = usuario.papel.at(0) + stringSequencial;
        usuario.matricula = novaMatricula;
        this.#usuarios.push(usuario);
    }

    cadastrarAutor(autor) {
        if (this.#autores.find(a => a.nome === autor.nome && a.sobrenome === autor.sobrenome)) {
            throw new Error('Usuário já consta da base.');
        } 
        const proximoSequencial = ++Biblioteca.#sequencialAutores;
        autor.codigo = proximoSequencial;
        this.#autores.push(autor);
    }

    cadastrarLivro(livro) {
        const proximoSequencial = ++Biblioteca.#sequencialLivros;
        livro.codigo = proximoSequencial;
        this.#livros.push(livro);
    }

    consultaLivros(disponibilidade) {
        const livros = this.listaLivros;
        switch (disponibilidade) {
            case undefined:
                return livros;
            case false:
            case 0:
                return livros.filter(livro => livro.disponibilidade === false);
            case true:
            case 1:
                return livros.filter(livro => livro.disponibilidade === true);
            default:
                throw new Error('O argumento \'disponbibilidade\' só aceita valores: 0 (ou false), 1 (ou true) e ausente (ou undefined).');
        }
    }

    fazerEmprestimo(matriculaUsuario, codigoLivro) {
        //console.log(this.#usuarios);
        const usuario = this.#usuarios.find(usuario => usuario.matricula === matriculaUsuario);
        const livro = this.#livros.find(livro => livro.codigo === codigoLivro);
        
        if (!usuario) {
            throw new Error('Usuário inválido ou não encontrado.');
        }

        if (!livro) {
            throw new Error('Livro não encontrado.');
        }

        if (!livro.disponibilidade) {
            throw new Error('Livro indisponível para empréstimo.');
        }

        // Atualiza a disponibilidade do livro
        livro.disponibilidade = false;

        // Adiciona o livro ao histórico do usuário
        usuario.historico.push(`Empréstimo do livro: "${livro.titulo}" [Código: ${livro.codigo}]`);
        
    }

    devolverEmprestimo(matriculaUsuario, codigoLivro) {
        const usuario = this.#usuarios.find(usuario => usuario.matricula === matriculaUsuario);
        if (!usuario) {
            throw new Error('Usuário inválido ou não encontrado.');
        }
        const livro = this.#livros.find(livro => livro.codigo === codigoLivro);
        if (!livro) {
            throw new Error('Livro não encontrado.');
        }
        if (livro.disponibilidade) {
            throw new Error('Livro não está emprestado.');
        }
        // Atualiza a disponibilidade do livro
        livro.disponibilidade = true;
        // Adiciona a devolução ao histórico do usuário
        usuario.historico.push(`Devolução do livro: "${livro.titulo}" [Código: ${livro.codigo}]`);
    }
    
    // --==-- Relatórios:
    gerarRelatorioUsuario() {
        const listaUsuario = this.listaUsuarios;

        listaUsuario.forEach ((itemUsuario, index, array) => {
            var listaHistorico = '';
            if (itemUsuario.historico.length < 1) {
                listaHistorico = ' ( Não há histórico de empréstimo ) ' + '\n';
            } else {
                itemUsuario.historico.forEach((itemHistorico)=>{
                    listaHistorico += ' --- ' + itemHistorico + '\n';
                });
            };
            
            const usuario = 
            '--=='.repeat(10) + '\n' +
            ' Nome      : ' + itemUsuario.nome + '\n' +
            ' Matricula : ' + itemUsuario.matricula + '\n' +
            ' Historico : ' + '\n' + listaHistorico + '\n' +
            '-^'.repeat(20) + '\n\n\n';

            console.log(usuario);
        });
    }
    
}
