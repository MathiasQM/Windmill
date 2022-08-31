import Windmill from "../utils/guitarClass.js";

export default class View {
    constructor(controller) {
        const self = this;
        const snSearchForm = document.getElementById("snSearchForm");
        const snField = document.getElementById("snField");
        const panelText = document.getElementById("panelText");
        const closeCross = document.getElementById("closeCross");
        const searchForm = document.getElementById("searchForm");
        const model = document.getElementById("model");
        const opstilling = document.getElementById("opstilling");
        const MW = document.getElementById("MW");
        const showAllWindmillsButton = document.getElementById("showAllWindmillsButton");
        const windmillDialogForm = document.getElementById("windmillDialogForm");
        const addWindmillButton = document.getElementById("addWindmillButton");
        const windmillDialog = document.getElementById("windmillDialog");
        const cancelButton = document.getElementById("cancelButton");
        const searchResult = document.getElementById("searchResult");
        const hiddenSnField = document.getElementById("hiddenSnField");
        const confirmDialog = document.getElementById("confirmDialog");
        const confirmDialogForm = document.getElementById("confirmDialogForm");
        const cancelConfirmDialogbtn = document.getElementById("cancelConfirmBtn")


        self.controller = controller;

        showAllWindmillsButton.onclick = function() {
            self.controller.showAllWindmills();
        }

        snSearchForm.onsubmit = function (e) {
            e.preventDefault();
            self.controller.snSearch(snField.value);
        }

        searchForm.onsubmit = function (e) {
            e.preventDefault();
            const optimalWindmill = new Windmill (" ", model.value, opstilling.value, MW.value);
            self.controller.search(optimalWindmill)
            searchPanel.classList.remove("searchPanelAnim")
        }

        panelText.onclick = function () {
            searchPanel.classList.add("searchPanelAnim")
        }

        closeCross.onclick = function () {
            searchPanel.classList.add("searchPanelAnim")
        }


        closeCross.onclick = function () {
            searchPanel.classList.remove("searchPanelAnim")
        }

        // Add Windmill Dialog

        addWindmillButton.onclick = function () {
            windmillDialogForm.reset();
            windmillDialog.showModal();
        }

        cancelButton.onclick = function () {
            windmillDialog.close();
        }

        windmillDialogForm.onsubmit = function () {
            self.controller.newWindmill({
                serialNumber: document.getElementById("snfield").value,
                model: document.getElementById("modelfield").value,
                opstilling: document.getElementById("opstillingsfield").value,
                MW: document.getElementById("mwfield").value
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === "BUTTON") {
                hiddenSnField.value = e.target.id;
                confirmDialog.showModal();
            }
        }

        cancelConfirmDialogbtn.onclick = function () {
            confirmDialog.close();
        }

        confirmDialogForm.onsubmit = function () {
            self.controller.deleteWindmill(hiddenSnField.value);
            self.controller.showAllWindmills();
        }

    }

    message(template){
        const element = document.getElementById("searchResult");
        element.innerHTML=""; //resets result output element
        element.insertAdjacentHTML("beforeend", template);
    }

    snackBar(snackmessage) {
        const snackBar = document.getElementById("snackBar");
        snackBar.innerHTML = snackmessage;
        snackBar.className= "show";
        setTimeout(function() {
            snackBar.className=snackBar.className.replace("show", " ");
        }, 3000)
    }
} 