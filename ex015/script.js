function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro. Verifique os dados e tente novamento.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //dá para fazer isso no html(como no ex014)
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançamacho.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovemmacho.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultomacho.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhomacho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançafemea.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'jovemfemea.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src', 'adultafemea.png')
            } else {
                //idoso
                img.setAttribute('src', 'velhafemea.png')
            }
        }
        res.style.textAlign = 'center' //dá para fazer no CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}