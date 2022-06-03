import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import {Cliente} from "./Cliente.js";

const diretor = new Diretor("Rodrigo", 10000, 1234567895);
diretor.cadastrarsenha("123456");

const gerente = new Gerente("Ricardo", 5000, 1234567899);
gerente.cadastrarsenha("123457");

const cliente = new Cliente ("Lais", 78965432, "456");
const gerenteestaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorestaLogado = SistemaAutenticacao.login(gerente, "123457");
const clienteestaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(clienteestaLogado);