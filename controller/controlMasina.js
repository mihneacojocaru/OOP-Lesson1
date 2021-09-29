

import Masina from "../model/masina.js";

class ControllMasina{



    constructor(){

        this.list=[];

        this.read();

        

    }


    //CRUD

    read=()=>{

        this.list=[];
        for(let i=0; i<localStorage.length; i++){

            let obj = localStorage.getItem(localStorage.key(i));
            obj=JSON.parse(obj);
    
              if(obj.id.includes("c")){
                let masina = new Masina(obj.id,obj.marca,obj.model,obj.combustibil,obj.an,obj.status);
                this.list.push(masina);
            
              }
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

        // let x=this.list.filter(e=>e.id!=id);

        // this.list.clear;

        // this.list=[...x];

        localStorage.removeItem(id);


                    
    }

    getIdFromName(marca, model){

        let currentId = '';

        this.list.forEach( e => {
            if(e.marca == marca && e.model == model){
                currentId = e.id;
            }
        })

        return currentId;
    }

    // save=()=>{


    //     localStorage.clear();

        
       
    //     this.list.forEach(e=>{

    //         localStorage
    //         .setItem(e.id,JSON.stringify(e));
    //     })

    // }



}

export default ControllMasina;
