function contar(){
    var n1= window.document.getElementById('num')
    var tab= window.document.getElementById('tab')
    if (n1.value.length == 0){
        window.alert('[ERRO] digite um numero.')
    }else{
        var num= Number(n1.value)
        tab.innerHTML= ''
        for(var c= 0; c<=10; c++){
            let item= document.createElement('option')
            item.text= `${num} x ${c}= ${num*c}`
            tab.appendChild(item)
        }
    }
}