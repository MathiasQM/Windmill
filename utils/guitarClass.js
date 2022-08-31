export default class Windmill {
    constructor (serialNumber,model,opstilling,MW) {
         this.serialNumber = serialNumber;
         this.MW = MW;
         this.model = model; 
         this.opstilling = opstilling;

    }

    getSerialNumber(){
        return this.serialNumber;
    }

    getMW(){
        return this.MW;
    }

    getModel(){
        return this.model;
    }

    getOpstilling(){
        return this.opstilling;
    }

}