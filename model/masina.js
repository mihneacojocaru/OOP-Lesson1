class Masina {

    constructor(id,marca,model,combustibil,an,status){

        this.id=id;
        this.marca=marca;
        this.model=model;
        this.combustibil=combustibil;
        this.an=an;
        this.status=status;
    }

    afiseaza=()=>{

    let text = "";

      text += "Marca: "+ this.marca +
              "; Model: "+ this.model +
              "; Combustibil: "+ this.combustibil +
              "; Anul: " + this.an +
              "; Status: " + this.status;

       return text;      
    }


    toCard=()=>{
        let card = `<div class="card">
                        <div class="img"></div>
                        <h3>${this.marca} ${this.model}</h3>
                        <div class="car-info">
                            <span>${this.combustibil}</span>
                            <span>*</span>
                            <span>${this.an}</span>
                            <span>*</span>
                            <span>${this.status}</span>
                        </div>
                        <div class="page-buttons">
                        <button>Edit</button>    
                        <button>Delete</button>
                        </div>
                     </div>`;
        return card;
    }

}


export default Masina;