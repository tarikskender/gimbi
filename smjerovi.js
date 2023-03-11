function show(i){

    var id = "desc-" + i.toString(), idn = "#" + id, fI = true, ids = "select-"+i.toString();

    var x = document.getElementById(id);
    var b = document.getElementById(ids);
    if (x.style.display === "block") {
        x.style.animation  = "fadeOut .5s forwards";
        if(fI == true) fI = false;
        b.innerHTML = "Pokaži više";
    } else {
        x.style.animation  = "fadeIn .5s forwards";
        x.style.display = "block";
        b.innerHTML = "Pokaži manje";
    }

    const animated = document.querySelector(idn);
    animated.addEventListener("animationend", () => {
        if(x.style.display === "block" && fI == false){
            x.style.display = "none";
            b.innerHTML = "Pokaži više";
        }else{
            x.style.display = "block"; 
            b.innerHTML = "Pokaži manje";
        } 
    });
}


