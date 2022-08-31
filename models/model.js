 import Inventory from "../utils/inventoryClass.js";

 export default class Model {
    constructor(){
        this.windmillList = new Inventory
        this.windmillList.addWindmill("34-343", "Vestas", "1998", 4);

        this.windmillList.addWindmill("54-343", "Vestas", "2010", 7);

        this.windmillList.addWindmill("84-343", "Vestas", "2020", 8);

        this.windmillList.addWindmill("94-343", "Vestas", "2000", 2);

        this.windmillList.addWindmill("35-643", "Vestas", "2015", 5);

        this.windmillList.addWindmill("24-343", "Vestas", "2019", 3);

        this.windmillList.addWindmill("14-343", "Vestas", "2013", 2);
    }
 }