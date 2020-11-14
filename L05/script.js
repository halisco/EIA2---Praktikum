"use strict";
var L05;
(function (L05) {
    window.addEventListener("load", handleload);
    function handleload(_event) {
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let order = document.querySelector("div#order");
        order.innerHTML = "";
        let formular = new FormData(document.forms[0]);
        for (let entry of formular) {
            let object = document.querySelector("[value='" + entry[1] + "']");
            let price = Number(object.getAttribute("price"));
            order.innerHTML += object.getAttribute("value") + "   " + price + "€";
        }
    }
})(L05 || (L05 = {}));
//# sourceMappingURL=script.js.map