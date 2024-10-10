var gerar = document.querySelector('#gerar')
gerar.addEventListener('click', tabuada)

function tabuada() {
    let numero = document.querySelector('#numero')
    let tab = document.querySelector('#seltab')
    let numtab = document.querySelector('#numero')
    if (numero.value.length == 0) {
        alert('por favor, digite um número!')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ''
        for(c = 1 ; c <= 10 ; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    

}

/*while (c <= 10) {
    let item = document.createElement('option')
    
   
    item.text = `${n} X ${c} = ${n*c}`
    
    tab.appendChild(item)
    c++
}*/