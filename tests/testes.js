import { Usuario } from "../src/Usuario.js";

export function cadastrarUsuarios(biblioteca) {
    const usuario1 = new Usuario(
        "Julio", 
        "A001", ['Livro 1', 'Livro 2', 'Livro 3']
    );
    const usuario2 = new Usuario("Ana", "A002", ['Livro 7']);
    biblioteca.cadastrarUsuario(usuario1);
    biblioteca.cadastrarUsuario(usuario2);
}