// Funcion determinista
function cubo(n1, n2, n3) {
    return n1 * n2 * n3
}

// Funcion no determinista
function aleatorio() {
    let min = 1.0
    let max = 999.0
    return Math.random()*(max-min)+min;
}

module.exports.cubo = cubo;
module.exports.aleatorio = aleatorio;