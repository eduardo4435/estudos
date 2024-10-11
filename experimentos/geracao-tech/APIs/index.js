/*
cep.onkeyup = () => {
    if(cep.value.length == 8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(tratarespota => tratarespota.json())
        .then(respotatratada => {
            cidade.value = respotatratada.localidade;
            rua.value = respotatratada.logradouro;
            bairro.value = respotatratada.bairro;
            estado.value = respotatratada.uf;
        })   
        .finally(() => {
            alert("Procedimento concluido")
        })
    }
} */

function buscarRegioes() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(res => res.json())
    .then(res => {
        res.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
        })
    })
}

buscarRegioes()

function buscarEstados() {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(res => res.json())
    .then(res => {
        estados.innerHTML = ''
        res.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        })
    })
}


