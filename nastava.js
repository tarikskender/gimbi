prikaz(1);    
function prikaz(i){
    let elements = document.getElementsByClassName("list");
    let buttoni = document.getElementsByClassName("color");
    for(var j=0; j<elements.length; j++)
    {
        elements[j].style.visibility="hidden";
        buttoni[j].classList.remove("selected");
    }
    let id="button-" + i.toString(), pdf="raspored-" + i.toString();
    let selected = document.getElementById(id);
    let prikazan = document.getElementById(pdf);
    prikazan.style.visibility="visible";
    selected.classList.toggle("selected");
}