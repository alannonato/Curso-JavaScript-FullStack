function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('Final')

}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { // Cuidado com o ponto ;, não usar ele nas estruturas de controle
        console.log(num)
    }
}
teste1(8)
teste2(8)