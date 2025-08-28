import { Usuario } from "../src/Usuario.js";
import { Autor } from "../src/Autor.js";
import { Livro } from "../src/Livro.js";
import { UsuarioAluno } from "../src/UsuarioAluno.js";
import { UsuarioProfessor } from "../src/UsuarioProfessor.js";
import { UsuarioBibliotecario } from "../src/UsuarioBibliotecario.js";


export function cadastrarUsuarios(biblioteca) {
    
    console.log("=-=-=-=-=-=-=------- C A D A S T R A N D O -------=-=-=-=-=-=-=\n");
    console.log('██╗   ██╗███████╗██╗   ██╗ █████╗ ██████╗ ██╗ ██████╗ ███████╗');
    console.log('██║   ██║██╔════╝██║   ██║██╔══██╗██╔══██╗██║██╔═══██╗██╔════╝');
    console.log('██║   ██║███████╗██║   ██║███████║██████╔╝██║██║   ██║███████╗');
    console.log('██║   ██║╚════██║██║   ██║██╔══██║██╔══██╗██║██║   ██║╚════██║');
    console.log('╚██████╔╝███████║╚██████╔╝██║  ██║██║  ██║██║╚██████╔╝███████║');
    console.log(' ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚══════╝');
    // https://www.asciiart.eu/text-to-ascii-art --- ANSI Shadow
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    
    let count = 0;

    // 30 alunos
    const alunos = [
        "Harry Potter", "Luke Skywalker", "Indiana Jones", "Marty McFly", "Forrest Gump",
        "Tony Stark", "Peter Parker", "Bruce Wayne", "Clark Kent", "Leia Organa",
        "Hermione Granger", "Ron Weasley", "Rocky Balboa", "James Bond", "Neo Anderson",
        "Ellen Ripley", "Han Solo", "Bilbo Baggins", "Frodo Baggins", "Katniss Everdeen",
        "Diana Prince", "Steve Rogers", "Natasha Romanoff", "Wade Wilson", "Logan Howlett",
        "Peter Quill", "Gamora Zen", "Arthur Fleck", "Miles Morales", "Shuri Wakanda",
        // Repetindo para testar erro de duplicação:
        "Marty McFly", "Tony Stark", "Bruce Wayne", "Leia Organa", "Hermione Granger"
    ];
    alunos.forEach(nome => {
        try {
            const novoAluno = new UsuarioAluno(nome);
            biblioteca.cadastrarUsuario(novoAluno);
            console.log(`#${++count}\tCadastrado: \x1b[32m${novoAluno.papel}(a)\x1b[0m ${novoAluno.nome} [ Matrícula: \x1b[32m${novoAluno.matricula}\x1b[0m ] --- Limite de empréstimos: \x1b[32m${novoAluno.getLimiteEmprestimos()}\x1b[0m`);
        } catch (error) {
            console.log('\t! ! ! --> NÃO cadastrado: ', nome);
            console.log('\t',' '.repeat(8), error.message);  
        }
    });

    // 10 professores
    const professores = [
        "Morgan Freeman", "Ian McKellen", "Maggie Smith", "Anthony Hopkins", "Judi Dench",
        "Michael Caine", "Helen Mirren", "Patrick Stewart", "Christopher Lee", "Jack Nicholson",
        "Meryl Streep", "Robert De Niro", "Al Pacino", "Denzel Washington", "Clint Eastwood",
        // Repetindo para testar erro de duplicação:   
        "Anthony Hopkins", "Judi Dench", "Michael Caine"
    ];
    professores.forEach(nome => {
        try {
            const novoProfessor = new UsuarioProfessor(nome);
            biblioteca.cadastrarUsuario(novoProfessor);
            console.log(`#${++count}\tCadastrado: \x1b[32m${novoProfessor.papel}(a)\x1b[0m ${novoProfessor.nome} [ Matrícula: \x1b[32m${novoProfessor.matricula}\x1b[0m ] --- Limite de empréstimos: \x1b[32m${novoProfessor.getLimiteEmprestimos()}\x1b[0m`);
        } catch (error) {
            console.log('\t! ! ! --> NÃO cadastrado: ', nome);
            console.log('\t',' '.repeat(8), error.message);  
        }
    });

    // 5 bibliotecários
    const bibliotecarios = [
        "Freddie Mercury",
        "Adele Adkins",
        "Beyoncé Knowles",
        "Elvis Presley",
        "Michael Jackson",
        // Repetindo para testar erro de duplicação:
        "Adele Adkins"
    ];
    bibliotecarios.forEach(nome => {
        try {
            const novoBibliotecario = new UsuarioBibliotecario(nome);
            biblioteca.cadastrarUsuario(novoBibliotecario);
            console.log(`#${++count}\tCadastrado: \x1b[32m${novoBibliotecario.papel}(a)\x1b[0m ${novoBibliotecario.nome} [ Matrícula: \x1b[32m${novoBibliotecario.matricula}\x1b[0m ] --- Limite de empréstimos: \x1b[32m${novoBibliotecario.getLimiteEmprestimos()}\x1b[0m`);
        } catch (error) {
            console.log('\t! ! ! --> NÃO cadastrado: ', nome);
            console.log('\t',' '.repeat(8), error.message);  
        }   
    });
    console.log("=-\n=-=-=-=-=-=------ F I M   D O   C A D A S T R O -----=-=-=-=-=-=\n=-");
    console.log("   *");
    console.log("           *");
    console.log("                   *");
    console.log("                           *");
    console.log("                                   *");
    console.log("                                           *");

}

export function cadastrarAutores(biblioteca) {
    const autores = [
        { nome: "Gabriel", sobrenome: "García Márquez", nacionalidade: "Colombiano" },
        { nome: "Jane", sobrenome: "Austen", nacionalidade: "Britânica" },
        { nome: "George", sobrenome: "Orwell", nacionalidade: "Britânico" },
        { nome: "J.K.", sobrenome: "Rowling", nacionalidade: "Britânica" },
        { nome: "J.R.R.", sobrenome: "Tolkien", nacionalidade: "Britânico" },
        { nome: "Machado", sobrenome: "de Assis", nacionalidade: "Brasileiro" },
        { nome: "Fiódor", sobrenome: "Dostoiévski", nacionalidade: "Russo" },
        { nome: "Mark", sobrenome: "Twain", nacionalidade: "Americano" },
        { nome: "Ernest", sobrenome: "Hemingway", nacionalidade: "Americano" },
        { nome: "William", sobrenome: "Shakespeare", nacionalidade: "Britânico" },
        { nome: "Leo", sobrenome: "Tolstói", nacionalidade: "Russo" },
        { nome: "Charles", sobrenome: "Dickens", nacionalidade: "Britânico" },
        { nome: "Agatha", sobrenome: "Christie", nacionalidade: "Britânica" },
        { nome: "Stephen", sobrenome: "King", nacionalidade: "Americano" },
        { nome: "Harper", sobrenome: "Lee", nacionalidade: "Americana" },
        { nome: "Antoine", sobrenome: "de Saint-Exupéry", nacionalidade: "Francês" },
        { nome: "Emily", sobrenome: "Brontë", nacionalidade: "Britânica" },
        { nome: "Oscar", sobrenome: "Wilde", nacionalidade: "Irlandês" },
        { nome: "Franz", sobrenome: "Kafka", nacionalidade: "Austro-húngaro" },
        { nome: "Isaac", sobrenome: "Asimov", nacionalidade: "Russo" },
        { nome: "Victor", sobrenome: "Hugo", nacionalidade: "Francês" },
        { nome: "J.D.", sobrenome: "Salinger", nacionalidade: "Americano" },
        { nome: "Herman", sobrenome: "Melville", nacionalidade: "Americano" },
        { nome: "Mary", sobrenome: "Shelley", nacionalidade: "Britânica" },
        { nome: "Emily", sobrenome: "Dickinson", nacionalidade: "Americana" },
        { nome: "Carlos", sobrenome: "Drummond de Andrade", nacionalidade: "Brasileiro" },
        { nome: "Clarice", sobrenome: "Lispector", nacionalidade: "Brasileira" },
        { nome: "José", sobrenome: "Saramago", nacionalidade: "Português" },
        { nome: "Jorge", sobrenome: "Amado", nacionalidade: "Brasileiro" },
        { nome: "Cecília", sobrenome: "Meireles", nacionalidade: "Brasileira" },
        { nome: "Edgar Allan", sobrenome: "Poe", nacionalidade: "Americano" },
        { nome: "Jules", sobrenome: "Verne", nacionalidade: "Francês" },
        { nome: "Lewis", sobrenome: "Carroll", nacionalidade: "Britânico" },
        { nome: "George R. R.", sobrenome: "Martin", nacionalidade: "Americano" },
        { nome: "Patrick", sobrenome: "Rothfuss", nacionalidade: "Americano" },
        { nome: "Rick", sobrenome: "Riordan", nacionalidade: "Americano" },
        { nome: "Dan", sobrenome: "Brown", nacionalidade: "Americano" },
        { nome: "Carlos", sobrenome: "Ruiz Zafón", nacionalidade: "Espanhol" },
        { nome: "Anne", sobrenome: "Frank", nacionalidade: "Alemã" },
        { nome: "Alexandre", sobrenome: "Dumas", nacionalidade: "Francês" },
        { nome: "Bram", sobrenome: "Stoker", nacionalidade: "Irlandês" },
        { nome: "Robert Louis", sobrenome: "Stevenson", nacionalidade: "Britânico" },
        { nome: "Emily", sobrenome: "Bronte", nacionalidade: "Britânica" },
        { nome: "Mário", sobrenome: "Quintana", nacionalidade: "Brasileiro" },
        { nome: "Lygia", sobrenome: "Fagundes Telles", nacionalidade: "Brasileira" },
        { nome: "Monteiro", sobrenome: "Lobato", nacionalidade: "Brasileiro" },
        { nome: "José", sobrenome: "de Alencar", nacionalidade: "Brasileiro" },
        { nome: "Graciliano", sobrenome: "Ramos", nacionalidade: "Brasileiro" },
        { nome: "Jorge Luis", sobrenome: "Borges", nacionalidade: "Argentino" },
        { nome: "Neil", sobrenome: "Gaiman", nacionalidade: "Britânico" }
    ];

    autores.forEach(a => {
        biblioteca.cadastrarAutor(new Autor(a.sobrenome, a.nome, a.nacionalidade));
    });
}

export function cadastrarLivros(biblioteca) {
    const livros = [
        // Primeiros 50 livros (um de cada autor)
        { titulo: "Cem Anos de Solidão", autor: { nome: "Gabriel", sobrenome: "García Márquez" } },
        { titulo: "O Amor nos Tempos do Cólera", autor: { nome: "Gabriel", sobrenome: "García Márquez" } },
        { titulo: "Orgulho e Preconceito", autor: { nome: "Jane", sobrenome: "Austen" } },
        { titulo: "Razão e Sensibilidade", autor: { nome: "Jane", sobrenome: "Austen" } },
        { titulo: "1984", autor: { nome: "George", sobrenome: "Orwell" } },
        { titulo: "A Revolução dos Bichos", autor: { nome: "Jorge", sobrenome: "Orwell" } },
        { titulo: "Harry Potter e a Pedra Filosofal", autor: { nome: "J.K.", sobrenome: "Rowling" } },
        { titulo: "Harry Potter e a Câmara Secreta", autor: { nome: "J.K.", sobrenome: "Rowling" } },
        { titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: { nome: "J.R.R.", sobrenome: "Tolkien" } },
        { titulo: "O Hobbit", autor: { nome: "J.R.R.", sobrenome: "Tolkien" } },
        { titulo: "Dom Casmurro", autor: { nome: "Machado", sobrenome: "de Assis" } },
        { titulo: "Memórias Póstumas de Brás Cubas", autor: { nome: "Machado", sobrenome: "de Assis" } },
        { titulo: "Crime e Castigo", autor: { nome: "Fiódor", sobrenome: "Dostoiévski" } },
        { titulo: "Os Irmãos Karamázov", autor: { nome: "Fiódor", sobrenome: "Dostoiévski" } },
        { titulo: "As Aventuras de Tom Sawyer", autor: { nome: "Mark", sobrenome: "Twain" } },
        { titulo: "As Aventuras de Huckleberry Finn", autor: { nome: "Mark", sobrenome: "Twain" } },
        { titulo: "O Velho e o Mar", autor: { nome: "Ernest", sobrenome: "Hemingway" } },
        { titulo: "Por Quem os Sinos Dobram", autor: { nome: "Ernest", sobrenome: "Hemingway" } },
        { titulo: "Hamlet", autor: { nome: "William", sobrenome: "Shakespeare" } },
        { titulo: "Romeu e Julieta", autor: { nome: "William", sobrenome: "Shakespeare" } },
        { titulo: "Guerra e Paz", autor: { nome: "Leo", sobrenome: "Tolstói" } },
        { titulo: "Anna Kariênina", autor: { nome: "Leo", sobrenome: "Tolstói" } },
        { titulo: "Oliver Twist", autor: { nome: "Charles", sobrenome: "Dickens" } },
        { titulo: "David Copperfield", autor: { nome: "Charles", sobrenome: "Dickens" } },
        { titulo: "Assassinato no Expresso do Oriente", autor: { nome: "Agatha", sobrenome: "Christie" } },
        { titulo: "Os Filhos de Anansi", autor: { nome: "Neil", sobrenome: "Gaiman" } },
        { titulo: "O Iluminado", autor: { nome: "Stephen", sobrenome: "King" } },
        { titulo: "It: A Coisa", autor: { nome: "Stephen", sobrenome: "King" } },
        { titulo: "O Sol é Para Todos", autor: { nome: "Harper", sobrenome: "Lee" } },
        { titulo: "O Pequeno Príncipe", autor: { nome: "Antoine", sobrenome: "de Saint-Exupéry" } },
        { titulo: "O Morro dos Ventos Uivantes", autor: { nome: "Emily", sobrenome: "Brontë" } },
        { titulo: "O Retrato de Dorian Gray", autor: { nome: "Oscar", sobrenome: "Wilde" } },
        { titulo: "O Processo", autor: { nome: "Franz", sobrenome: "Kafka" } },
        { titulo: "A Metamorfose", autor: { nome: "Franz", sobrenome: "Kafka" } },
        { titulo: "Eu, Robô", autor: { nome: "Isaac", sobrenome: "Asimov" } },
        { titulo: "Fundação", autor: { nome: "Isaac", sobrenome: "Asimov" } },
        { titulo: "Os Miseráveis", autor: { nome: "Victor", sobrenome: "Hugo" } },
        { titulo: "O Corcunda de Notre-Dame", autor: { nome: "Victor", sobrenome: "Hugo" } },
        { titulo: "O Apanhador no Campo de Centeio", autor: { nome: "J.D.", sobrenome: "Salinger" } },
        { titulo: "Moby Dick", autor: { nome: "Herman", sobrenome: "Melville" } },
        { titulo: "Frankenstein", autor: { nome: "Mary", sobrenome: "Shelley" } },
        { titulo: "Poemas Completos", autor: { nome: "Emily", sobrenome: "Dickinson" } },
        { titulo: "A Rosa do Povo", autor: { nome: "Carlos", sobrenome: "Drummond de Andrade" } },
        { titulo: "A Hora da Estrela", autor: { nome: "Clarice", sobrenome: "Lispector" } },
        { titulo: "Ensaio sobre a Cegueira", autor: { nome: "José", sobrenome: "Saramago" } },
        { titulo: "Capitães da Areia", autor: { nome: "Jorge", sobrenome: "Amado" } },
        { titulo: "Romanceiro da Inconfidência", autor: { nome: "Cecília", sobrenome: "Meireles" } },
        { titulo: "O Corvo e Outros Poemas", autor: { nome: "Edgar Allan", sobrenome: "Poe" } },
        { titulo: "Viagem ao Centro da Terra", autor: { nome: "Jules", sobrenome: "Verne" } },
        { titulo: "Alice no País das Maravilhas", autor: { nome: "Lewis", sobrenome: "Carroll" } },
        // Próximos 50 livros (repetindo autores já cadastrados)
        { titulo: "Cem Sonetos de Amor", autor: { nome: "Gabriel", sobrenome: "García Márquez" } },
        { titulo: "Persuasão", autor: { nome: "Jane", sobrenome: "Austen" } },
        { titulo: "Emma", autor: { nome: "Jane", sobrenome: "Austen" } },
        { titulo: "Harry Potter e o Prisioneiro de Azkaban", autor: { nome: "J.K.", sobrenome: "Rowling" } },
        { titulo: "Harry Potter e o Cálice de Fogo", autor: { nome: "J.K.", sobrenome: "Rowling" } },
        { titulo: "O Senhor dos Anéis: As Duas Torres", autor: { nome: "J.R.R.", sobrenome: "Token" } },
        { titulo: "O Senhor dos Anéis: O Retorno do Rei", autor: { nome: "J.R.R.", sobrenome: "Tolkien" } },
        { titulo: "Quincas Borba", autor: { nome: "Machado", sobrenome: "de Assis" } },
        { titulo: "O Alienista", autor: { nome: "Machado", sobrenome: "de Assis" } },
        { titulo: "O Idiota", autor: { nome: "Fiódor", sobrenome: "Dostoiévski" } },
        { titulo: "Noites Brancas", autor: { nome: "Fiódor", sobrenome: "Dostoiévski" } },
        { titulo: "O Príncipe e o Mendigo", autor: { nome: "Mark", sobrenome: "Twain" } },
        { titulo: "Um Ianque na Corte do Rei Arthur", autor: { nome: "Mark", sobrenome: "Twain" } },
        { titulo: "Adeus às Armas", autor: { nome: "Ernest", sobrenome: "Hemingway" } },
        { titulo: "O Sol Também se Levanta", autor: { nome: "Ernest", sobrenome: "Hemingway" } },
        { titulo: "Macbeth", autor: { nome: "William", sobrenome: "Shakespeare" } },
        { titulo: "Otelo", autor: { nome: "William", sobrenome: "Shakespeare" } },
        { titulo: "A Morte de Ivan Ilitch", autor: { nome: "Leo", sobrenome: "Tolstói" } },
        { titulo: "Infância", autor: { nome: "Leo", sobrenome: "Tolstói" } },
        { titulo: "Grandes Esperanças", autor: { nome: "Charles", sobrenome: "Dickens" } },
        { titulo: "Um Conto de Duas Cidades", autor: { nome: "Charles", sobrenome: "Dickens" } },
        { titulo: "Morte no Nilo", autor: { nome: "Agatha", sobrenome: "Christie" } },
        { titulo: "O Misterioso Caso de Styles", autor: { nome: "Agatha", sobrenome: "Christina" } },
        { titulo: "Carrie, a Estranha", autor: { nome: "Stephen", sobrenome: "King" } },
        { titulo: "A Torre Negra", autor: { nome: "Stephen", sobrenome: "King" } },
        { titulo: "Vá, Coloque um Vigia", autor: { nome: "Harper", sobrenome: "Lee" } },
        { titulo: "Voo Noturno", autor: { nome: "Antoine", sobrenome: "de Saint-Exupéry" } },
        { titulo: "Tempestade de Luz", autor: { nome: "Emily", sobrenome: "Brontë" } },
        { titulo: "De Profundis", autor: { nome: "Oscart", sobrenome: "Wilde" } },
        { titulo: "Carta ao Pai", autor: { nome: "Franz", sobrenome: "Kafka" } },
        { titulo: "O Castelo", autor: { nome: "Franz", sobrenome: "Kafka" } },
        { titulo: "O Fim da Eternidade", autor: { nome: "Isaac", sobrenome: "Asimov" } },
        { titulo: "Nove Amanhãs", autor: { nome: "Isaac", sobrenome: "Asimov" } },
        { titulo: "O Homem que Ri", autor: { nome: "Victor", sobrenome: "Hugo" } },
        { titulo: "Os Trabalhadores do Mar", autor: { nome: "Victor", sobrenome: "Hugo" } },
        { titulo: "Nove Histórias", autor: { nome: "J.D.", sobrenome: "Salinger" } },
        { titulo: "Franny e Zooey", autor: { nome: "J.D.", sobrenome: "Salinger" } },
        { titulo: "Benito Cereno", autor: { nome: "Herman", sobrenome: "Melville" } },
        { titulo: "Bartleby, o Escrivão", autor: { nome: "Herman", sobrenome: "Melville" } },
        { titulo: "O Último Homem", autor: { nome: "Mary", sobrenome: "Shelley" } },
        { titulo: "Valperga", autor: { nome: "Mary", sobrenome: "Shelley" } },
        { titulo: "Poemas Escolhidos", autor: { nome: "Emily", sobrenome: "Dickinson" } },
        { titulo: "Cartas", autor: { nome: "Emily", sobrenome: "Dickinson" } },
        { titulo: "Claro Enigma", autor: { nome: "Carlos", sobrenome: "Drummond de Andrade" } },
        { titulo: "Sentimento do Mundo", autor: { nome: "Carlos", sobrenome: "Drummond de Andrade" } },
        { titulo: "A Paixão Segundo G.H.", autor: { nome: "Clarice", sobrenome: "Lispector" } },
        { titulo: "Perto do Coração Selvagem", autor: { nome: "Clarice", sobrenome: "Lispector" } },
        { titulo: "O Evangelho Segundo Jesus Cristo", autor: { nome: "José", sobrenome: "Zaramagus" } },
        { titulo: "Memorial do Convento", autor: { nome: "José", sobrenome: "Saramago" } },
        { titulo: "Deuses Americanos", autor: { nome: "Neil", sobrenome: "Gaiman" } }
    ];
    const listaAutores = biblioteca.listaAutores;

    console.log("=-=-=-=---- C A D A S T R A N D O ----=-=-=-=\n");
    console.log('██╗     ██╗██╗   ██╗██████╗  ██████╗ ███████╗');
    console.log('██║     ██║██║   ██║██╔══██╗██╔═══██╗██╔════╝');
    console.log('██║     ██║██║   ██║██████╔╝██║   ██║███████╗');
    console.log('██║     ██║╚██╗ ██╔╝██╔══██╗██║   ██║╚════██║');
    console.log('███████╗██║ ╚████╔╝ ██║  ██║╚██████╔╝███████║');
    console.log('╚══════╝╚═╝  ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝');
    // https://www.asciiart.eu/text-to-ascii-art --- ANSI Shadow
    console.log("- - - - - - - - - - - - - - - - - - - - - - -");
    
    livros.forEach(l => {
        const x = listaAutores.find(a => a.nome === l.autor.nome && a.sobrenome === l.autor.sobrenome);

        if (!x) {
            console.log(`! ! ! --> NÃO cadastrado: "${l.titulo}"; \n${' '.repeat(10)}Autor não encontrado: ${l.autor.sobrenome.toUpperCase()}, ${l.autor.nome}. `);
        } else {
            const novoLivro = new Livro(l.autor.sobrenome, l.autor.nome, l.titulo, true);
            biblioteca.cadastrarLivro(novoLivro);
            console.log(`Cadastrado: ${novoLivro.autorSobrenome.toUpperCase()}, ${novoLivro.autorNome}. "${novoLivro.titulo}" [Código: ${novoLivro.codigo}]`);
        }
    });
    console.log("=-\n=-=-=-=---- F I M   D O   C A D A S T R O ----=-=-=-=\n=-");
    console.log("   *");
    console.log("           *");
    console.log("                   *");
    console.log("                           *");
    console.log("                                   *");
    console.log("                                           *");

}