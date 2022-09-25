let listaCompra = ["Avena", "Leche", "Carne", "Pescado", "Huevos"]

listaCompra.push("Aceite de Girasol")
listaCompra.pop()

let peliculas = [
    {titulo: "Cadena perpetua", director: "Frank Darabont", fecha: new Date(1995, 1, 24)},
    {titulo: "Interstellar", director: "Christopher Nolan", fecha: new Date(2014, 10, 7)},
    {titulo: "El viaje de Chihiro", director: "Hayao Miyazaki", fecha: new Date(2002, 10, 25)}
]

const fecha_Post_2010 = peliculas.filter(obj => obj.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(peliculas => {
    return peliculas.director
})

const titulos = peliculas.map(peliculas => {
    return peliculas.titulo
})

const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]