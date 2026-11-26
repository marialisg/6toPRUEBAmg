const edad = 16; //number
const nombre = "Ana"; //string
const activo = true; //boolean
const vacio = null;
let pendiente; //undefined
const clave = Symbol();

const restar = (a,b) => a-b;
const tasaInteres = (i,vp,n) => i(vp * n)
const interesSimple = (p,i,n) => p*i*n

// Función que recibe un array y un callback
function transformar(array, callback) {
    return array.map(callback);
}

const numeros = [1, 2, 3];

const resultado = transformar(numeros, function(numero) {
    return numero * 2;
});

console.log(resultado);

//Conservar solo usuarios de 18 años o más
function mayoresDeEdad(usuarios) {
    return usuarios.filter(function(usuario) {
        return usuario.edad >= 18;
    });
}

const estudiantes = [
    {id: 1, nombre: "ana", nota: 85},
    {id: 2, nombre: "luis", nota: 58}
]

for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i].nombre);
}

//foreach (retorna undefined)
estudiantes.forEach(e=> {
    console.log(e.nombre);
});

//map (85, 58 son nuevos arrays)
const notas = estudiantes.map(e=> e.nota);

//filter
const aprobados = estudiantes.filter(
    e => e.nota
)
//find

// reduce
const total=notas.reduce((acc,n) => acc+n, 0);
const promedio = total / notas.length;

// some
const hayReprobados = estudiantes.some(e => e.nota < 60);

//every
const todosActivos = usuarios.every(u => u.activo);

// USA REDUCE PARA SUMAR PRECIOS DE PRODUCTOS
// array
const productos = [
    { nombre: "Laptop", precio: 500 },
    { nombre: "Mouse", precio: 20 },
    { nombre: "Teclado", precio: 30 }
];

//reduce
const totalP = productos.reduce((acc, producto) => acc + producto.precio, 0);

//sort
const ordenados = [..estudiantes]
.sort((a,b)=> b.nota - a.nota);

const nombres = estudiantes
.filter