import ControllMasina from "../controller/controlMasina.js";



class ViewHome{


    constructor(){

        
        this.controllMasina= new ControllMasina();

        this.container=document.querySelector(".container");


        this.header=document.createElement('header');

        this.container.appendChild(this.header);

        this.setHeader();

        this.main = document.createElement('main');

        this.container.appendChild(this.main);

        this.setMain();

        this.container.addEventListener("click",this.deleteHandler);

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

        this.controllMasina.list.forEach(e=>{
             text+=e.toCard();
        });
        
        this.main.innerHTML=text;
    }



    editHandler=(e)=>{

        let carId = "c5";
        e.preventDefault();
        let obj = e.target;

        if(obj.tagName == "BUTTON" && obj.classList.contains("edit")){
            
            let cardObj = obj.parentNode.parentNode;
            let makeModel = cardObj.children[1].textContent;

            const splitString = makeModel.split(" ");

            carId = this.controllMasina.getIdFromName(splitString[0],splitString[1]);
            console.log(carId);
            
            let input = document.createElement('input');
            input.type = "text";
            input.value = makeModel;
            input.id = "nameInput";

            cardObj.insertBefore(input, cardObj.children[1]);

            cardObj.removeChild(cardObj.children[2]);

            //cardObj.children --> anstatt querySelector

            let editBtn = cardObj.children[3].children[0];

            editBtn.textContent = "Save";
            editBtn.className = "save";

        } else if(obj.classList.contains("save")){
            
            let input = document.getElementById('nameInput');

            let h3 = document.createElement('h3');

            if(input.value != ""){
                h3.textContent = input.value;

                let newName = input.value.split(" ");

                this.controllMasina.updateNume(newName[0],newName[1],carId);


                let card = obj.parentNode.parentNode;

                card.insertBefore(h3, card.children[1]);
                card.removeChild(card.children[2]);

                let saveBtn = document.querySelector('.save');
                saveBtn.textContent = "Edit";
                saveBtn.className = "edit";
            } else{
                alert("Input value cannot be null!");
            }

        }

    
    }

    deleteHandler=(e)=>{


       e.preventDefault();
        let obj = e.target;

        if(obj.tagName=="BUTTON"&&obj.classList.contains("delete")){

            let textArray = obj.parentNode.parentNode.children[1].textContent.split(' ');

            let marca = textArray[0];
            let model = textArray[1];
            let currentId = this.controllMasina.getIdFromName(marca,model);
            this.controllMasina.deleteElement(currentId);

            this.controllMasina.read();


            this.setMain();
        }





    }
    


}

export default ViewHome;