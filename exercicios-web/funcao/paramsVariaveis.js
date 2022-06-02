function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(area(1))
console.log(area(1.1, 2.2, 3.3))
console.log(area(1.1, 2.2, 3.3, "Teste"))
console.log(area("a", "b", "c"))