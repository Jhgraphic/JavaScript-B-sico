let datosPer = {
    nombre: "Joan",
    apellido: "Horrach",
    edad: 35,
    altura: 175,
    eresDesarrollador: false
}

let edad = datosPer.edad

let lista = [
    {
        ...datosPer
    },{
        nombre: "Manolo",
        apellido: "García",
        edad: 33,
        altura: 170,
        eresDesarrollador: false
    },{
        nombre: "Pedro",
        apellido: "Hernandez",
        edad: 34,
        altura: 179,
        eresDesarrollador: false
    }
]

lista.sort((a, b) => b.edad - a.edad)