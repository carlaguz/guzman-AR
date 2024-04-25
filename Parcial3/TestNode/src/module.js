import express from 'express';
const app = express();
const port = 3000;

export function cubo(n1, n2, n3){
    let res = n1 * n2 * n3
    return res;
}