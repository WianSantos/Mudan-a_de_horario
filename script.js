function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    // hora maior que 0 até 12 logo é manhã. Bom dia
    img.src = 'imagem/manha.png'
    document.body.style.background = '#95672f'
  } else if (hora >= 12 && hora < 18) {
    //hora maior igual que 12 e menor que 18. Boa tarde.
    img.src = 'imagem/tarde.png'
    document.body.style.background = '#c69d72'
  } else {
    //Boa noite maior que 18 e menor que 0
    img.src = 'imagem/noite.png'
    document.body.style.background = '#583f5e'
  }
}
