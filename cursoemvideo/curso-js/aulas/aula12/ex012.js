var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora > 5 && hora < 12){
    console.log(`Bom Dia!`)
} else if (hora >= 12 && hora <= 17){
    console.log(`Boa Tarde!`)
} else if (hora >= 18 && hora <= 23){
    console.log (`Boa Noite!`)
} else if (hora <= 5 && hora > -1) {
    console.log(`Madrugada`)
} else {
    console.log(`Essa hora não existe`)
}