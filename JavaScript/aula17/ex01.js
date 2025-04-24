var aluno= {nome: 'eliakim', nota_final: 0,
    nota(n=0){
        console.log(`nota; ${n}`)
        this.nota_final+= n
        if ((this.nota_final/4) >= 5){
            console.log(`Aluno ${this.nome} foi Aprovado.`)
        }else{
            console.log(`Aluno ${this.nome} foi Reprovado.`)
        }
    }
}

aluno.nota(5)
aluno.nota(5)
aluno.nota(5)
aluno.nota(5)

console.log(aluno.nota_final)