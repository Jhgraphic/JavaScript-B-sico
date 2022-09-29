const nombre = "Joan"
const apellido = "Horrach"

const name = {
    nombre,
    apellido
}

// sessionStorage.setItem("name", JSON.stringify(datos))
// localStorage.setItem("name", JSON.stringify(datos))

const now = new Date()
// document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(now.getTime() + 2 * 60000)}`