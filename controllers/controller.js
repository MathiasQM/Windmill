export default class Controller{
    initialize(model, view){
        this.model = model;
        this.view = view;
    }

    buildTemplate(windmill){
        return `<div class="card">
            <div class="container">
                <h4>Serial Number:</h4>
                <p>${windmill.getSerialNumber()}</p>
                <h4>Mærke:</h4>
                <p>${windmill.getModel()}</p>
                <h4>Opstillings år:</h4>
                <p>${windmill.getOpstilling()}</p>
                <h4>mW sidste år</h4>
                <p>${windmill.getMW()}</p>
            </div>
            <button type="button" id="${windmill.getSerialNumber()}">Delete</button>
        </div>`;
        //return `<tr class="customerrow">
        //<td>${windmill.getSerialNumber()}</td>
        //<td>${windmill.getModel()}</td>
        //<td>${windmill.getOpstilling()}</td>
        //<td>${windmill.getMW()}</td>
        //<td><button type="button" id="${windmill.getSerialNumber()}">Delete</button></td>
        //</tr>`;
    }

    snSearch (serialNumber){
        const windmill = this.model.windmillList.getWindmill(serialNumber);
        let template = "";

        if (windmill !== null){
            template = this.buildTemplate(windmill);
        } else {
            template = `
            <tr class ="customerrow">
            <td colspan="8">Nothing to show</td>
            </tr>`;
        }
        this.view.message(template);
    }

    search (searchWindmill){
        const windmill = this.model.windmillList.search(searchWindmill);
        let template = "";

        if (windmill !== null){
        template = this.buildTemplate(windmill);
        } else {
        template = `
        <tr class ="customerrow">
        <td colspan="8">Nothing to show</td>
        </tr>`;
    }
    this.view.message(template);
} 

    showAllWindmills() {
        let template = "";
        for (const windmill of this.model.windmillList.allWindmills()) {
            template += this.buildTemplate(windmill);
        }
        this.view.message(template);
    }

    newWindmill(windmill) {
        const doesWindmillAlreadyExist = this.model.windmillList.getWindmill(windmill.serialNumber);

        if (doesWindmillAlreadyExist === null) {
            this.model.windmillList.addWindmill(windmill.serialNumber, windmill.model, windmill.opstilling, windmill.MW);
            this.view.snackBar("The Windmill Was saved!");
            this.showAllWindmills();
        } else {
            this.view.snackBar("The Windmill already exists!");
        }
    }

    deleteWindmill(sn) {
        this.model.windmillList.deleteWindmill(sn);
        this.view.snackBar("The Windmill was deleted!")
    }

}



