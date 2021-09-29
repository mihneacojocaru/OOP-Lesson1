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

        //this.container.addEventListener("click",this.deleteHandler);

        this.container.addEventListener("click",this.editHandler);

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



    editHandler=(e)=>{

        e.preventDefault();
        let obj = e.target;

        if(obj.tagName == "BUTTON" && obj.classList.contains("edit")){
            
            let x = obj.parentNode.parentNode.children[1].textContent;

            let y = obj.parentNode.parentNode;

            let input = document.createElement('input');
            input.type = "text";
            input.value = x;

            y.insertBefore(input, y.children[1]);

            console.log(y);
 

        }

        
        

    }

    deleteHandler=(e)=>{


       e.preventDefault();
        let obj = e.target;

        if(obj.tagName=="BUTTON"&&obj.classList.contains("delete")){

            let textArray = obj.parentNode.parentNode.children[1].textContent.split(' ');

            let marca = textArray[0];
            let model = textArray[1];
            let currentId = this.controllMasini.getIdFromName(marca,model);
            this.controllMasini.deleteElement(currentId);

            this.controllMasini.read();


            this.setMain();
        }





    }
    


}

export default ViewHome;