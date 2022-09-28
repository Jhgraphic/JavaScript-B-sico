function Fibonacci(num) {
    const lista = [1, 1];
    for (var i = 2; i < num; i++) {
        lista.push(lista[i-2] + lista[i-1]);
    }
    return lista
}

console.log(Fibonacci(6))
