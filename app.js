

import Masina from "./masina.js";

import ControllMasina from "./controlMasina.js";


let masina = new Masina(1,"Dacia","Logan","benzin", 2010, "disponibil");

console.log(masina.toCard());


let test = new ControllMasina();

test.createHTML();





