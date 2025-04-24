var num= window.document.getElementById('num')
var verif= window.document.getElementById('verif')
var sel= window.document.getElementById('sel')
var res= window.document.getElementById('res')
var lista_add= []



function checar_n(n,lista){
    if((Number(n) >= 1 && Number(n) <= 100) && lista.indexOf(Number(n)) == -1){
        return true
    }else{
        return false
    }
}



function add(){
    if(checar_n(num.value,lista_add) == false){
        window.alert('[ERRO]')

    }else{
        var n_add= document.createElement('option')
        n_add.text= `valor: ${num.value}`
        sel.appendChild(n_add)
        lista_add.push(Number(num.value))
    }
    num.value= ''
    num.focus()
    res.innerHTML= ''
}

function verificar(){
    if(lista_add.length == 0){
        window.alert('[ERRO] adicione valores.')
    }else{
        let menor= lista_add[0]
        let maior= lista_add[0]
        let soma= 0

        for(let c= 0; c < lista_add.length; c++){
            soma+= Number(lista_add[c])
            if(Number(lista_add[c]) > maior){
                maior= lista_add[c]
            }else if(Number(lista_add[c]) < menor){
                menor=lista_add[c]
            }
        }
        let media= soma/lista_add.length
        res.innerHTML= ''
        res.innerHTML+= `<p>Você adicionou ${lista_add.length} valores</p>`
        res.innerHTML+= `<p>O maior valor adionado foi ${maior}.</p>`
        res.innerHTML+= `<p>O menor valor adionado foi ${menor}.</p>`
        res.innerHTML+= `<p>A soma dos valores é igual: ${soma}.</p>`
        res.innerHTML+= `<p>A média dos valores é igual: ${media}.</p>`
    }


}
