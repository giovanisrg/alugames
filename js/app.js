
function alterarStatus(id) {
    // alterarStatus()
    let jogoClicado = document.getElementById(`game-${id}`)
    let imagem = jogoClicado.querySelector('.dashboard__item__img')
    let botao = jogoClicado.querySelector('.dashboard__item__button')

    // Verifica se existe algum jogo já alugado
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');

    // Se o jogo clicado já está alugado, exibe um alerta e impede a ação
    if (imagem.classList.contains('.dashboard__item__img--rented')) {
        alert('Jogo alugado')
        return
    }
    
    // Se há algum jogo alugado e o jogo clicado não está alugado, impede a ação
    if (jogosAlugados.length > 0 && !imagem.classList.contains('dashboard__item__img--rented')) {
        alert('Ja existe um jogo alugado');
        return;
    }

    // Alterna o status de alugado/devolver
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented')
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'
    } else {
        imagem.classList.add('dashboard__item__img--rented')
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
    }
}

// function alterarStatus() {
//     let botaoDevolver = document.querySelector('game-3')
//     if (botaoDevolver.classList.contains('dashboard__item__button--return')) {
//         imagem.classList.remove('dashboard__item__img--rented')
//         botao.classList.remove('dashboard__item__button--return')
//     }
// }

//     if (id == jogoAlugado) {
//         return alert('Jogo alugado')
//     }
//     if (jogoAlugado) {
//         return alert('Ja existe um jogo alugado')
//     }
//     alterandotexto()
//     mudarCor = document.querySelector('a').classList.add('dashboard__item__button--return')
//     jogoAlugado = id
// }