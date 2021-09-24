import ControllMasina from "../controller/controlMasina.js";



class ViewHome{


    constructor(){

        
        this.controllMasini= new ControllMasina();

        this.container=document.querySelector(".container");


        this.header=document.createElement('header');

        this.container.appendChild(this.header);

        this.setHeader();

        this.main = document.createElement('main');

        this.container.appendChild(this.main);

        this.setMain();

        //header

        //main 

        //footer

        
    }


    setHeader = () => {
        let h1 = document.createElement('h1');
        h1.textContent = "Parc Auto";
        this.header.appendChild(h1);
        
    };


    setMain=()=>{
        

        let text="";

        this.controllMasini.list.forEach(e=>{


             text+=e.toCard();
        });
        
        this.main.innerHTML=text;
    }



    editHandler=()=>{



    }

    deleteHandler=(e)=>{


        let obj=e.target.parentNode;

        

    }
    


}

export default ViewHome;