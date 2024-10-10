function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var titulo = document.getElementsByClassName('titulo')[0]
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
    if (hora >= 6 && hora <= 11) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
        titulo.innerHTML = 'Bom Dia!'

    } else if (hora >= 12 && hora <= 17) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
        titulo.innerHTML = 'Boa Tarde!'

    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
        titulo.innerHTML = 'Boa Noite!'

    }
}

