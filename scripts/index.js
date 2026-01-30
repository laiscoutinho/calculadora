
// Insere ano atual no rodapé do projeto;
document
    .getElementById('anoAtual') // pega o elemento pelo ID
    .innerHTML                  // insere o conteúdo no HTML
        = new Date().getFullYear();