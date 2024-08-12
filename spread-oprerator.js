let lenguajes = ['javascript', 'PHP', 'Python', 'JAVA']
let frameworks= ['React', 'Laravel', 'Django', 'Sprint']

// Unir los arreglos en 1 solo

let combinacion = lenguajes.concat(frameworks)

console.log(combinacion)

let combinator = [...lenguajes, ...frameworks]
console.log(combinator)

let [ultimo] = [...lenguajes].reverse()
console.log(ultimo)