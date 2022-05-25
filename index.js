import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 1234567890);
const cliente2 = new Cliente("Alice", 9876543210);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente (cliente2, 1002);

conta1.depositar(500);

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta1, conta2);