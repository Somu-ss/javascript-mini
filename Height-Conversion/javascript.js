document.getElementById("submit").addEventListener("click", height);

function height(){
    var feet=parseInt(document.getElementById("feet").value * 12);
    var inches = parseInt(document.getElementById("inch").value);
     
    var cm = (feet + inches) *2.54;
    var n = cm.toFixed(0);
    document.getElementById("con").innerHTML=n;
}