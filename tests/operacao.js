import { Usuario } from "../src/Usuario.js";
import { Livro } from "../src/Livro.js";

export function fazerEmprestimos(biblioteca) {
    // Botar um tryh/catch...
    
    biblioteca.fazerEmprestimo('A00001', 1);

    console.log(biblioteca.consultaLivros());

    biblioteca.fazerEmprestimo('A00001', 1);
}