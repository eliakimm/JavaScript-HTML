function carregar(){
    var msg1= window.document.getElementById('msg1')
    var img1= window.document.getElementById('img1')
    var data= new Date()
    var hora= data.getHours()
    msg1.innerHTML=`Agora são: ${hora} horas`
    if (hora >= 0 && hora < 12 ){
        //DIA
        img1.src= 'manha.png'
        document.body.style.background='#dfb731'
    }else if(hora >= 12 && hora < 18){
        //TARDE
        img1.src= 'tarde.png'
        document.body.style.background='#8181d1'
    }else{
        //NOITE
        img1.src= 'noite.png'
        document.body.style.background='#dd797f'
    }
}

