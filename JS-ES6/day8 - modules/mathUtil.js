export function add(a,b){
    return a + b;
}

export function sub(a,b){
    return a - b;
}

export default function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

export {divide as partition}

export function greeting(name){
    return `hello ${name} welcome`
}