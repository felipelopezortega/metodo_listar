export default class Group{

    constructor() {
       
        this.start = null;
    }

    add(newPerson){

        if(this._start == null){

            this._start = newPerson;

        }else{

            let aux = this._start;
            while(aux._next != null)
            aux = aux._next;
            aux._next = newPerson;
        }
    }

    list(){

        let announ = "";
        let aux = this._start;
        while(aux){

            announ += `Nombre: ${aux._name} Edad: ${aux._age}\n`;
            aux = aux._next;
        }

        return announ;

    }


}