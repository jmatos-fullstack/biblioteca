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
        const aleatorio1 = Math.floor(Math.random()*40);
        const usuarioAleatorio = usuarios.find(
            usuario => parseInt(usuario.matricula.slice(-5)) === aleatorio1
        );
        
        const aleatorio2 = Math.floor(Math.random()*90);
        const livroAleatorio = livros.find(
            livro => livro.codigo === aleatorio2
        );

        try {
            if (usuarioAleatorio.getLimiteEmprestimos() === usuarioAleatorio.historico.length) {
                console.log(`\n\x1b[41m! ! ! -->\x1b[0m Empréstimo NÃO realizado:`);
                console.log(' '.repeat(9), `\x1b[33mLimite de empréstimos (${usuarioAleatorio.getLimiteEmprestimos()}) atingido\x1b[0m para ${usuarioAleatorio.nome}.`);  
            } else { 
                biblioteca.fazerEmprestimo(
                     !usuarioAleatorio ? 'X00001' : usuarioAleatorio.matricula, // Forçar erro se não achar usuário
                     !livroAleatorio ? -1 : livroAleatorio.codigo  // Forçar erro se não achar livro
                )
            };
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

export function fazerAlgumasDevolucoes(biblioteca) {

    console.log("=-=-=-=------------------------- R E A L I Z A N D O -------------------------=-=-=-=\n");
    console.log('██████╗ ███████╗██╗   ██╗ ██████╗ ██╗     ██╗   ██╗ ██████╗ ██████╗ ███████╗███████╗');
    console.log('██╔══██╗██╔════╝██║   ██║██╔═══██╗██║     ██║   ██║██╔════╝██╔═══██╗██╔════╝██╔════╝');
    console.log('██║  ██║█████╗  ██║   ██║██║   ██║██║     ██║   ██║██║     ██║   ██║█████╗  ███████╗');
    console.log('██║  ██║██╔══╝  ╚██╗ ██╔╝██║   ██║██║     ██║   ██║██║     ██║   ██║██╔══╝  ╚════██║');
    console.log('██████╔╝███████╗ ╚████╔╝ ╚██████╔╝███████╗╚██████╔╝╚██████╗╚██████╔╝███████╗███████║');
    console.log('╚═════╝ ╚══════╝  ╚═══╝   ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝╚══════╝');
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - -");

    // Para cada usuário, verifica se há empréstimos
    biblioteca.listaUsuarios.forEach(usuario => {
        // Filtra apenas os empréstimos (ignora devoluções)
        const emprestimos = usuario.historico
            .filter(item => item.startsWith('Empréstimo do livro'))
            .map(item => {
                // Extrai o código do livro do texto
                const match = item.match(/Código: (\d+)/);
                return match ? parseInt(match[1]) : null;
            })
            .filter(codigo => codigo !== null);

        // Decide aleatoriamente quantos livros devolver (pode ser nenhum)
        if (emprestimos.length > 0) {
            // Devolve entre 1 e emprestimos.length - 1 livros (não todos)
            const qtdDevolver = Math.floor(Math.random() * emprestimos.length);
            // Seleciona aleatoriamente os livros a serem devolvidos
            const codigosParaDevolver = emprestimos
                .sort(() => 0.5 - Math.random())
                .slice(0, qtdDevolver);

            codigosParaDevolver.forEach(codigoLivro => {
                try {
                    biblioteca.devolverEmprestimo(usuario.matricula, codigoLivro);
                    const tituloLivro = biblioteca.listaLivros.find(livro => livro.codigo === codigoLivro).titulo;
                    console.log(`Devolvido: \x1b[32m${usuario.nome}\x1b[0m devolveu "\x1b[33m${tituloLivro}\x1b[0m" [Código: ${codigoLivro}]\n`);
                } catch (e) {
                    console.log(`Erro ao devolver livro para ${usuario.nome}: ${e.message}`);
                }
            });
        }
    });
    console.log("=-\n=-=-=-=---------------------------- F I M ----------------------------=-=-=-=\n=-");
    console.log("   *");
    console.log("           *");
    console.log("                   *");
    console.log("                           *");
    console.log("                                   *");
    console.log("                                           *");
}