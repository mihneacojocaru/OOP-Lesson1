

import Masina from "../model/masina.js";



let x = new Masina("c1", "Volkswagen", "Passat", "diesel", 2019, "disponibil");

let x1 = new Masina("c2", "Volkswagen", "Golf", "benzin", 2015, "indisponibil");

let x2 = new Masina("c3", "Mercedes", "C220", "diesel", 2017, "disponibil");

let x3 = new Masina("c4", "Mercedes", "B180", "benzin", 2018, "indisponibil");

let x4 = new Masina("c5", "Audi", "A4", "diesel", 2020, "indisponibil");

let x5 = new Masina("c6", "Audi", "A3", "benzin", 2019, "disponibil");

let x6 = new Masina("c7", "Skoda", "CityGo", "elektrik", 2020, "indisponibil");

let x7 = new Masina("c8", "BMW", "3er", "benzin", 2019, "indisponibil");

let x8 = new Masina("c9", "BMW", "i3", "elektrik", 2019, "disponibil");

let x9 = new Masina("c10", "Seat", "Ibiza", "diesel", 2017, "disponibil");

let x10 = new Masina("c11", "Seat", "Leon", "diesel", 2015, "indisponibil");

localStorage.setItem(x.id,JSON.stringify(x));
localStorage.setItem(x1.id,JSON.stringify(x1));
localStorage.setItem(x2.id,JSON.stringify(x2));
localStorage.setItem(x3.id,JSON.stringify(x3));
localStorage.setItem(x4.id,JSON.stringify(x4));
localStorage.setItem(x5.id,JSON.stringify(x5));
localStorage.setItem(x6.id,JSON.stringify(x6));
localStorage.setItem(x7.id,JSON.stringify(x7));
localStorage.setItem(x8.id,JSON.stringify(x8));
localStorage.setItem(x9.id,JSON.stringify(x9));
localStorage.setItem(x10.id,JSON.stringify(x10));

