
alert(`Bienvenido al simulador de prestamos!`)
let interes = 1.05
let cuotas = parseInt(prompt("ingrese la cantidad de cuotas en las que desearía devolver el préstamo"));
    
while (cuotas == null || /\D/.test(cuotas) || cuotas == "") {
    cuotas = prompt("Ingrese un valor numérico: ");
};

let monto = parseInt(prompt("ingrese el monto necesario"));
    
while (monto == null || /\D/.test(monto) || monto == "") {
    monto = prompt("Ingrese un valor numérico: ");
};

for(let i = 1; i <= cuotas; i++){
    let resultado = (monto/cuotas) * interes;
    alert(`La cuota ${i} es ${resultado}`);

}
