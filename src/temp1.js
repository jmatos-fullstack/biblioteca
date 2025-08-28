// Você pode refatorar criando subclasses para cada tipo de usuário,
// herdando de Usuario, e sobrescrevendo métodos conforme necessário.
// Veja um exemplo básico:






// Como usar:
const aluno = new UsuarioAluno("Harry Potter");
console.log(aluno.getLimiteEmprestimos()); // 3

const prof = new UsuarioProfessor("Maggie Smith");
console.log(prof.getLimiteEmprestimos()); // 7

const bib = new UsuarioBibliotecario("Freddie Mercury");
console.log(bib.getLimiteEmprestimos()); // Infinity




console.log('██████╗ ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗ ██████╗ ██████╗ ███████╗███████╗');
console.log('██╔══██╗██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║██╔════╝██╔═══██╗██╔════╝██╔════╝');
console.log('██║  ██║█████╗  ██║   ██║██║   ██║██║     ██║   ██║██║     ██║   ██║█████╗  ███████╗');
console.log('██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║██║     ██║   ██║██╔══╝  ╚════██║');
console.log('██████╔╝███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝╚██████╗╚██████╔╝███████╗███████║');
console.log('╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚══════╝');



console.log('██╗  ██╗██╗███████╗████████╗ ██████╗ ██████╗ ██╗ ██████╗ ██████╗ ')
console.log('██║  ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║██╔════╝██╔═══██╗')
console.log('███████║██║███████╗   ██║   ██║   ██║██████╔╝██║██║     ██║   ██║')
console.log('██╔══██║██║╚════██║   ██║   ██║   ██║██╔══██╗██║██║     ██║   ██║')
console.log('██║  ██║██║███████║   ██║   ╚██████╔╝██║  ██║██║╚██████╗╚██████╔╝')
console.log('╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ')


// UML:
//plantuml.com 

// @startuml

// class Biblioteca {
//     - livros: Livro[]
//     - usuarios: Usuario[]
//     + cadastrarLivro(livro: Livro)
//     + cadastrarUsuario(usuario: Usuario)
//     + emprestarLivro(livro: Livro, usuario: Usuario)
//     + devolverLivro(livro: Livro, usuario: Usuario)
// }

// class Autor {
//     - nome: String
//     + Autor(nome: String)
// }

// class Livro {
//     - titulo: String
//     - autor: Autor
//     - disponivel: Boolean
//     + Livro(titulo: String, autor: Autor, disponivel: Boolean)
// }

// class Usuario {
//     - nome: String
//     - papel: String
//     - matricula: String
//     - historico: Livro[]
//     + Usuario(nome: String, papel: String)
//     + getLimiteEmprestimos(): int
// }

// class UsuarioAluno {
//     + getLimiteEmprestimos(): int
// }

// class UsuarioProfessor {
//     + getLimiteEmprestimos(): int
// }

// class UsuarioBibliotecario {
//     + getLimiteEmprestimos(): int
// }

// Biblioteca "1" o-- "*" Livro
// Livro "1" o-- "1" Autor
// Biblioteca "1" o-- "*" Usuario
// Usuario <|-- UsuarioAluno
// Usuario <|-- UsuarioProfessor
// Usuario <|-- UsuarioBibliotecario

// @enduml
