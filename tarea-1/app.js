import { saludo } from './mensaje.js'
import os from 'os';

console.log("Hola me llamo Carlos Rodriguez")
console.log("Quiero seguir mejorando mis stack como developer y poder crecer profesionalmente")


console.log("Sistema operativo: ", os.platform())
console.log("Memoria libre: ", os.freemem() / 1024 / 1024 / 1024)

console.log(saludo())

