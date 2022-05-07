document.getElementById("submit").addEventListener("click", bmicalc);

function bmicalc(){
    var cm =parseInt(document.getElementById("height").value);
    var kg = parseInt(document.getElementById("weight").value);

    var bmi;
    var newCm= parseFloat(cm/100);

    bmi = kg/(newCm * newCm);
    bmi = bmi.toFixed(1);
    console.log(bmi);

    document.getElementById("con").innerHTML = bmi;
}