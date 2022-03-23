window.addEventListener("load", init);
function ID(elem){
    return document.getElementById(elem);
}
function CLASS(elem){
    return document.getElementsByClassName(elem);
}
function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    sakktabla();
    sakktablaSzinezes();
    for (let index = 0; index < 64; index++) {
        $(".container div")[index].addEventListener("click", babu);
    }
}
function babu(){
    event.target.innerHTML = "S";
    event.target.removeEventListener("click", babu)
}

function sakktabla(){
    var txt = "";
    for (let index = 0; index < 64; index++) {
        txt += "<div></div>";
    }
    $(".container")[0].innerHTML = txt;
}

function sakktablaSzinezes(){
    var sakkElemTomb = $(".container div")
    for (let index = 0; index < 64; index++) {
        var sor = Math.floor(index / 8);
        console.log(sor);
        if (sor % 2 === 0){
            if (index % 2 === 0){
                sakkElemTomb[index].style.backgroundColor = "black";
            }
        } else {
            if (index % 2 === 1){
                sakkElemTomb[index].style.backgroundColor = "black";
            }
        }
    }
}