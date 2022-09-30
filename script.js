function clicar(){
    var res = window.document.getElementById ('res')
    var fano = window.document.getElementById ('txtano')
    var data = new Date()
    var ano = data.getFullYear()

    if( fano.value == 0 || Number(fano.value) > ano){
        window.alert('ERRO! Verifique os dados e tente novamente!')
    
    } else {
        var fsex = window.document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)

        var genero = ''

        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 1 && idade <=12){
                img.setAttribute ('src','imagens/cria-h.png')
            } else if ( idade >= 13 && idade <= 19){
                img.setAttribute ('src', 'imagens/ado-h.png')
            } else if ( idade >= 20 && idade <= 60){
                img.setAttribute ('src', 'imagens/adu-h.png')
            } else if ( idade > 60 ){
                img.setAttribute ('src', 'imagens/ido-h.png')
            }


        } else if (fsex[1].checked){
            genero ='Mulher'

            if(idade >= 1 && idade <=12){
                img.setAttribute ('src','imagens/cria-m.png')
            } else if ( idade >= 13 && idade <= 19){
                img.setAttribute ('src', 'imagens/ado-m.png')
            } else if ( idade >= 20 && idade <= 60){
                img.setAttribute ('src', 'imagens/adu-m.png')
            } else if ( idade > 60 ){
                img.setAttribute ('src', 'imagens/ido-m.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}