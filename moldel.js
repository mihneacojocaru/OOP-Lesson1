

import Masina from "./masina.js";



let x = new Masina(1, "Volkswagen", "Passat", "diesel", 2019, "disponibil");

let x1 = new Masina(2, "Volkswagen", "Golf", "benzin", 2015, "indisponibil");

let x2 = new Masina(3, "Mercedes", "C220", "diesel", 2017, "disponibil");

let x3 = new Masina(4, "Mercedes", "B180", "benzin", 2018, "indisponibil");

let x4 = new Masina(5, "Audi", "A4", "diesel", 2020, "indisponibil");

let x5 = new Masina(6, "Audi", "A3", "benzin", 2019, "disponibil");

let x6 = new Masina(7, "Skoda", "CityGo", "elektrik", 2020, "indisponibil");

let x7 = new Masina(8, "BMW", "3er", "benzin", 2019, "indisponibil");

let x8 = new Masina(9, "BMW", "i3", "elektrik", 2019, "disponibil");

let x9 = new Masina(10, "Seat", "Ibiza", "diesel", 2017, "disponibil");

let x10 = new Masina(11, "Seat", "Leon", "diesel", 2015, "indisponibil");

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

