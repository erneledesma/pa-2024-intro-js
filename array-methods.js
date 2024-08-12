
//metodos para arreglos

const personas = [
    {nombre:'Juan', edad:23, puesto:'Frontend'},
    {nombre:'Lucia', edad:25, puesto:'UXUI'},
    {nombre:'Maria', edad:27, puesto:'Backend'},
    {nombre:'Marcos', edad:33, puesto:'DevOps'},
]



console.log(personas)

const mayores = personas.filter( persona => {
    return persona.edad > 25
})

const maria = personas.find(persona => {
    return persona.nombre === 'Maria'
})


console.log(maria)