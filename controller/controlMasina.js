

import Masina from "../model/masina.js";

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

        console.log("END*********END");

    }

    //


    updateCombustibil(marca,model,combustibil){

        this.list.forEach(e=>{

            if(e.marca == marca && e.model == model){
                e.combustibil = combustibil;
            }

        });

    }

    updateAnFabricatie(marca,model,an){

        this.list.forEach( e => {
            if(e.marca == marca && e.model == model){
                e.an = an;
            }
        });
    }

    updateStatus(marca, model, status){

        this.list.forEach( e => {
            if(e.marca == marca && e.model == model){
                e.status = status;
            }
        })
    }

    deleteElement(id){

        let x=this.list.filter(e=>e.id!=id);

        this.list.clear;

        this.list=[...x];
                    
    }

    save=()=>{


        localStorage.clear();

        
       
        this.list.forEach(e=>{

            localStorage
            .setItem(e.id,JSON.stringify(e));
        })

    }


}

export default ControllMasina;
