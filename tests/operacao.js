export function fazerEmprestimos(biblioteca) {
    
    const usuarios = biblioteca.listaUsuarios;
    const livros = biblioteca.listaLivros;
    
    
    console.log("=-=-=-=---------------------------- R E A L I Z A N D O ----------------------------=-=-=-=\n");
    console.log('███████╗███╗   ███╗██████╗ ██████╗ ███████╗███████╗████████╗██╗███╗   ███╗ ██████╗ ███████╗');
    console.log('██╔════╝████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║████╗ ████║██╔═══██╗██╔════╝');
    console.log('█████╗  ██╔████╔██║██████╔╝██████╔╝█████╗  ███████╗   ██║   ██║██╔████╔██║██║   ██║███████╗');
    console.log('██╔══╝  ██║╚██╔╝██║██╔═══╝ ██╔══██╗██╔══╝  ╚════██║   ██║   ██║██║╚██╔╝██║██║   ██║╚════██║');
    console.log('███████╗██║ ╚═╝ ██║██║     ██║  ██║███████╗███████║   ██║   ██║██║ ╚═╝ ██║╚██████╔╝███████║');
    console.log('╚══════╝╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝');
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
    
    for (let i=1; i <=100; i++) {
        const aleatorio1 = Math.floor(Math.random()*52);
        const usuarioAleatorio = usuarios.find(
            usuario => parseInt(usuario.matricula.slice(-5)) === aleatorio1
        );
        
        const aleatorio2 = Math.floor(Math.random()*102);
        const livroAleatorio = livros.find(
            livro => livro.codigo === aleatorio2
        );

        try {
            biblioteca.fazerEmprestimo(
                !usuarioAleatorio ? 'X00001' : usuarioAleatorio.matricula, // Forçar erro se não achar usuário
                !livroAleatorio ? -1 : livroAleatorio.codigo  // Forçar erro se não achar livro
            );
            console.log(`\n\x1b[32mEmpréstimo realizado\x1b[0m: ${usuarioAleatorio.nome} [${usuarioAleatorio.matricula}] retirou "${livroAleatorio.titulo}" [Código: ${livroAleatorio.codigo}]`);
        } catch (error) {
            console.log('\n\x1b[41m! ! ! -->\x1b[0m Empréstimo NÃO realizado:');
            if (!usuarioAleatorio || !livroAleatorio) {
                console.log(' '.repeat(9), error.message);
            } else {
                console.log(' '.repeat(9), `Livro "${livroAleatorio.titulo}" [Código: ${livroAleatorio.codigo}] INDISPONÍVEL para ${usuarioAleatorio.nome}.`);
            }
        }
    }
    console.log("=-\n=-=-=-=---------------------------- F I M ----------------------------=-=-=-=\n=-");
    console.log("   *");
    console.log("           *");
    console.log("                   *");
    console.log("                           *");
    console.log("                                   *");
    console.log("                                           *");
}