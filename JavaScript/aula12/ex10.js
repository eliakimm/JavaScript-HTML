// Estrutura de codiçõa composta:

// var idade= 22

// if(idade < 18){
//     console.log('O serviço militar te aguarda...')
// }else if(idade === 18){
//     console.log('Você esta pronto para servir ao exercíto!!!')
// }else{
//     console.log('DESERTOR!!!')
// }

//Estrutura de condições aninhadas:

// var data= new Date()
// var hora= data.getHours()
// console.log(`São ${hora} horas`)
// if (hora < 6){
//     console.log('Ainda é madrugada, vá dormir.')
// }else if(hora >= 6 && hora < 12){
//     console.log('Bom dia.')
// }else if(hora >= 12 && hora < 18){
//     console.log('Boa tarde.')
// }else{
//     console.log('Boa noite.')
// }


//Switch case:

var semana=new Date()
var dia= semana.getDay()

switch(dia){
    case 0:
        console.log('Domingo.')
        break
    case 1:
        console.log('Segunda-feira.')
        break
    case 2:
        console.log('Terça-feira.')
        break
    case 3:
        console.log('Quarta-feira.')
        break
    case 4:
        console.log('Quinta-feira.')
        break
    case 5:
        console.log('Sexta-feira.')
        break
    case 6:
        console.log('Sabádo.')
        break
}
