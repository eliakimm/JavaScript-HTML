// //Codição simples:

// var carro= 'nissan silvia'
// if(carro == 'nissan silvia'){
//     console.log('vrummmm')
// }


//Condições compostas:
//
var salario= Number(2500)
console.log(`salário: ${salario.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
if (salario < 2000){
    console.log('pobre')
}else{
    console.log('tá joia')
}
