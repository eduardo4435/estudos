var botao = document.querySelector('#botao')
botao.addEventListener('click',contar)

function contar() {
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    let resultado = document.querySelector('#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let n_inicio = Number(inicio.value)
        let n_fim = Number(fim.value)
        let n_passo = Number(passo.value)
        if (n_passo <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            n_passo = 1
        }
        if ( n_inicio < n_fim) {
            //contagem progressiva
            for(contador = n_inicio; contador <= n_fim; contador += n_passo) {
                resultado.innerHTML += `${contador} `  
            }
        } else {
            //contagem regressiva
            for(contador = n_inicio; contador >= n_fim; contador -= n_passo) {
                resultado.innerHTML += `${contador} `
            }
        }
    }
}

// mão \u{1F449}
// bamdeira \u{1F3C1}