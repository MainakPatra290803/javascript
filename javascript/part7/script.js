
let x = document.getElementById("ele1");
x.addEventListener("click",function(){
    x.style.color = "yellow";
    x.style.backgroundColor = "red";
});

let y = document.getElementById("ele2");
y.addEventListener("mousemove",function(){
    y.style.color = "white";
    y.style.backgroundColor = "orange";
});

let z = document.getElementById("ele3");
z.addEventListener("mouseleave",function(){
    z.style.color = "black";
    z.style.backgroundColor = "blue";
});
