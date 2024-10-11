var dia = document.getElementById('dia')
var mes = document.getElementById('mes')

let meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

for(d = 1; d < 32; d++) {
    dia.innerHTML += `<option>${d}</option>`
}

for(m = 0; m < 12; m++) {
    mes.innerHTML += `<option>${meses[m]}</option>`
}