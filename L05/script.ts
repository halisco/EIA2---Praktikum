namespace L05 {
window.addEventListener("load", handleload);

function handleload(_event: Event): void {
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    form.addEventListener("change", handleChange);
}

function handleChange(_event: Event): void {
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
    order.innerHTML = "";

    let formular: FormData = new FormData(document.forms[0]);
    for (let entry of formular) {
        let object: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']");
        let price: number = Number(object.getAttribute("price"));

        order.innerHTML += object.getAttribute("value") + "   " + price + "€";
    }
}

    
}