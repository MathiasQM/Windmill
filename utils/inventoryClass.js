import Windmill from "./guitarClass.js"


export default class Inventory{
    constructor(){
        this.windmills = [];
    }

    addWindmill(serialNumber, model, opstilling, MW){
        const newWindmill = new Windmill(serialNumber, model, opstilling, MW);
        this.windmills.push(newWindmill);
    }

    getWindmill(serialNumber){
        for (const windmill of this.windmills){
            if (serialNumber === windmill.serialNumber){
                return windmill;
            }
        }
        //The value null represent the intentional absence of an object value;
        return null;
    }

    search(idealWindmill){
        //destructuring
        const {serialNumber, model, opstilling, MW} = idealWindmill;
        for (const windmill of this.windmills) {
            if (windmill.MW <= MW && windmill.model===model && windmill.opstilling===opstilling){
                return windmill;
            }
        }

        return null;
    }

    allWindmills() {
        return this.windmills;
    }

    deleteWindmill(sn) {
        const index=this.windmills.map(windmill => windmill.serialNumber).indexOf(sn);
        this.windmills.splice(index, 1) // Removes guitar from guitar object list
    }
}