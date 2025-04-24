function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var ano_nasc= window.document.getElementById('idade')
    var idade= ano - Number(ano_nasc.value)
    var res= window.document.getElementById('res')
    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano){
        window.alert('[ERRO] dados inválidos.')
    }else{
        var sexo= window.document.getElementsByName('rsex')
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        var genero= ''
        if(sexo[0].checked){
            genero= 'Homem'
            if(idade > 0 && idade < 18){
                //criança
                img.setAttribute('src','h_crianca.png')
            }else if(idade >= 18 && idade < 50){
                //jovem
                img.setAttribute('src','h_jovem.png')
            }else{
                //idoso
                img.setAttribute('src','h_idoso.png')
            }
        }else if(sexo[1].checked){
            genero= 'Mulher'
            if(idade > 0 && idade < 18){
                //criança
                img.setAttribute('src','m_crianca.png')
            }else if(idade >= 18 && idade < 50){
                //jovem
                img.setAttribute('src','m_jovem.png')
            }else{
                //idoso
                img.setAttribute('src','m_idosa.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML= `Detectamos ${genero} de ${idade} anos.`}
        res.appendChild(img)
}
// var msg= window.document.getElementById('msg')
// var img= window.document.getElementById('img')

