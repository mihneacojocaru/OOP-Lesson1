

import Masina from "./masina.js";

class ControllMasina{


    constructor(){

        this.list=[];

        this.read();
    }


    //CRUD

    read=()=>{

        let i=1;

        while(localStorage.getItem(i)){


            let ob=localStorage.getItem(i);


           ob=JSON.parse(ob);


           this.list.push(new Masina(ob.id, ob.marca, ob.model, ob.combustibil, ob.an, ob.status));

           i++;
        }



    }

    afisare=()=>{

        this.list.forEach(m=>{
            console.log(m.afiseaza());
        });

    }

    createHTML = () => {
        let container = document.getElementById("main");
        container.innerHTML = "";
        this.list.forEach( el => {
            let card = `
            <div class="card">
                <div class="img"></div>
                <h3>${el.marca} ${el.model}</h3>
                <div class="car-info">
                    <span>${el.combustibil}</span>
                    <span>*</span>
                    <span>${el.an}</span>
                    <span>*</span>
                    <span>${el.status}</span>
                </div>
            </div>
            `;
        container.innerHTML += card;
        })
    }



}

export default ControllMasina;
