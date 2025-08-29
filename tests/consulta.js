export function listaHistoricoUsuarios(biblioteca) {
    console.log("=-=-=-=-=-=---------- C O N S U L T A N D O ----------=-=-=-=-=-=\n");
    console.log('██╗  ██╗██╗███████╗████████╗ ██████╗ ██████╗ ██╗ ██████╗ ██████╗ ');
    console.log('██║  ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██║██╔════╝██╔═══██╗');
    console.log('███████║██║███████╗   ██║   ██║   ██║██████╔╝██║██║     ██║   ██║');
    console.log('██╔══██║██║╚════██║   ██║   ██║   ██║██╔══██╗██║██║     ██║   ██║');
    console.log('██║  ██║██║███████║   ██║   ╚██████╔╝██║  ██║██║╚██████╗╚██████╔╝');
    console.log('╚═╝  ╚═╝╚═╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═════╝ ');
    // https://www.asciiart.eu/text-to-ascii-art --- ANSI Shadow
    console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");

    const listaUsuarios = biblioteca.listaUsuarios;

    listaUsuarios.forEach(usuario => {

        if (usuario.historico && usuario.historico.length > 0) {
            console.log(` Usuário: ${usuario.nome} (${usuario.papel})`);

            usuario.historico.forEach(operacao => {
                console.log('\t ', operacao);
            });
            console.log('\n');

        }
    });
}