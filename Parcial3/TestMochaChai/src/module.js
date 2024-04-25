import express from 'express';
const app = express();
const port = 3000;

export function cubo(n) {
    let res = n * n * n;
    return res;
}

export function cuadrado(n) {
    let res = n * n
    return res;
}
//export function
// dos funciones y pruebas, poner saltar una prueba, ejecutar etcet