var butao = document.getElementById('butao')
butao.addEventListener('click', verificar)
function verificar() {

   var data = new Date() 
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (fano.value == 0 || Number(fano.value) > ano) {
      window.alert('Verifique os dados em tente novamente!')
   } else {
      var fsex = document.getElementsByName('redsex')
      var idade = ano - Number(fano.value)
      var genero = null
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
         genero = 'Homem'

         if (idade >= 0 && idade < 10) {
            // criança
            img.setAttribute('src', 'menino.jpg')
         } else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-h.jpg')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src','homem.jpg')
         } else {
            //idoso
            img.setAttribute('src','veiosafado.jpg')
         }
      } else {
         genero = 'Mulher'

         if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute('src','menina.jpg')
         } else if (idade < 21) {
            // jovem
            img.setAttribute('src','jovem-m.jpg')
         } else if (idade < 50) {
            //adulto
            img.setAttribute('src','mulher.jpg')
         } else {
            //idoso
            img.setAttribute('src','idosa.jpg')
         }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos`
      res.appendChild(img)
   }
}