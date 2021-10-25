const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //Remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa retirado novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);