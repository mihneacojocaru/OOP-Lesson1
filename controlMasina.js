

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





}

export default ControllMasina;
