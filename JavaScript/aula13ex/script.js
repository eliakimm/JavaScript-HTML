function contar(){
    var inicio= window.document.getElementById('inicio')
    var fim= window.document.getElementById('fim')
    var passos= window.document.getElementById('passos')
    var res= window.document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerText= 'Preencha os campos acima...'
    }else{
        res.innerHTML= 'Contando: <br>'
        var n1= Number(inicio.value)
        var n2= Number(fim.value)
        var n3= Number(passos.value)
        const emoji = '%E2%98%BA';
        if (n3 == 0){n3= 1}
        if (n1 < n2){
            while(n1 <= n2){
                res.innerHTML+= `${n1} \u{1F449}`
                n1+= n3}
        }else{
            while(n1 >= n2){
                res.innerHTML+= `${n1} \u{1F449}`
                n1-= n3}}
        res.innerHTML+= ` \u{1F3C1}	`
    }
}