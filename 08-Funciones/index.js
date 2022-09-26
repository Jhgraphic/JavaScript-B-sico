// Una función sin parámetros que devuelva siempre "true"

function sinParametros() {
    return true
}

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function promesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

// Una función generadora de índices pares automáticos

function* generadora() {
    let id = 0
    while(true) {
        yield id += 2
    }
}