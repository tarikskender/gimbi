window.onload = (hideAll(0));

/*function opciFunction(){

}

function racFunction(){

}

function nFunc(){

}*/

function dsdFunc(){
    document.getElementById("i4").style.visibility = "visible";
    hideAll(4);
}

function hideAll(x){
    for(var i = 0; i<=4; i++){
        if(i!=x) document.getElementById("i"+x.toString()).style.visibility = "hidden";
    }
    
}