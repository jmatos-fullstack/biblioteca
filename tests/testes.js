import { Usuario } from "../src/Usuario.js";
import { Livro } from "../src/Livro.js";

export function cadastrarUsuarios(biblioteca) {
    const usuario1 = new Usuario(
        "Julio", 
        "A001", ['Livro 1', 'Livro 2', 'Livro 3']
    );
    const usuario2 = new Usuario("Ana", "A002", ['Livro 7']);
    biblioteca.cadastrarUsuario(usuario1);
    biblioteca.cadastrarUsuario(usuario2);
}

export function cadastrarLivros(biblioteca) {

   const titulos = [
        "A Menina que Roubava Livros", "Dom Casmurro", "1984", "O Pequeno Príncipe", "Orgulho e Preconceito",
        "O Senhor dos Anéis", "Harry Potter e a Pedra Filosofal", "O Hobbit", "Cem Anos de Solidão", "O Apanhador no Campo de Centeio",
        "O Morro dos Ventos Uivantes", "O Grande Gatsby", "Moby Dick", "Crime e Castigo", "A Revolução dos Bichos",
        "O Retrato de Dorian Gray", "Drácula", "O Médico e o Monstro", "A Ilha do Tesouro", "O Conde de Monte Cristo",
        "O Silmarillion", "A Guerra dos Tronos", "O Nome do Vento", "O Código dos Justos", "A Sombra do Vento",
        "O Ladrão de Raios", "Percy Jackson e o Mar de Monstros", "A Culpa é das Estrelas", "O Sol é Para Todos", "O Caçador de Pipas",
        "O Diário de Anne Frank"
    ];

    const autores = [
        "Markus Zusak", "Machado de Assis", "George Orwell", "Antoine de Saint-Exupéry", "Jane Austen",
        "J.R.R. Tolkien", "J.K. Rowling", "J.R.R. Tolkien", "Gabriel García Márquez", "J.D. Salinger",
        "Emily Brontë", "F. Scott Fitzgerald", "Herman Melville", "Fiódor Dostoiévski", "George Orwell",
        "Oscar Wilde", "Bram Stoker", "Robert Louis Stevenson", "Robert Louis Stevenson", "Alexandre Dumas",
        "J.R.R. Tolkien", "George R. R. Martin", "Patrick Rothfuss", "Dan Brown", "Carlos Ruiz Zafón",
        "Rick Riordan", "Rick Riordan", "John Green", "Harper Lee", "Khaled Hosseini",
        "Anne Frank"
    ];

    for (let i = 0; i < 30; i++) {
        const livro = new Livro(titulos[i], autores[i], true);
        biblioteca.cadastrarLivro(livro);
    }
}