const nombre = "Joan"
const apellido = "Horrach"

const estudiante = nombre.concat(" ", apellido)

const estudianteMayus = estudiante.toUpperCase()

const estudianteMinus = estudiante.toLowerCase()

const estudianteLength = estudiante.length

const nombreFirst = nombre[0]

const apellidoLast = apellido[apellido.length - 1]

const estudianteSinEspacios = estudiante.replace(/ /g, "")

const nombreEstudiante = estudiante.includes(nombre)
