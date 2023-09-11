const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
    const DATO = parseInt(document.getElementById('peso').value);
    if (DATO > 0){
        ERROR.style.display = 'none';
        if (DATO > 30){
            flujo = ((DATO*4)+7)/(DATO+90);
            FLU.innerHTML = 'SC * 1500 = '+Math.round(flujo*1500);
            MAN.innerHTML = 'SC * 2000 = '+Math.round(flujo*2000);
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }else{
            let flujo = calcFlujo(DATO);
            let mantenimiento = flujo*1.5;
            FLU.innerHTML = flujo + ' cc/hr';
            MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
        }
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})
function calcFlujo(peso){
    let resto = peso;
    let flujo = 0;
    if (resto>20){
        let aux = resto-20;
        flujo += aux*20;
        resto -= aux;
    } 
    if (resto>10){
        let aux = resto-10;
        flujo += aux*50;
        resto -= aux;
    }
    flujo += resto*100;
    flujo = flujo/24;
    return Math.round(flujo);
}