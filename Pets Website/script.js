let ulElement = document.getElementById("listItemContainer");
let iconBarsClick = document.getElementById("toggleBars1");

iconBarsClick.onclick = function() {
    ulElement.classList.toggle("show-items");
}

let leftArrowEle = document.getElementById("leftArrow");
let rightArrowEle = document.getElementById("rightArrow");

let preImgEle1 = document.getElementById("previousImg1");
let preImgEle2 = document.getElementById("previousImg2");
let preImgEle3 = document.getElementById("previousImg3");

let phEle1 = document.getElementById("nameOfTheDog1");
let phEle2 = document.getElementById("nameOfTheDog2");
let phEle3 = document.getElementById("nameOfTheDog3");

leftArrowEle.onclick = function() {
    preImgEle1.src = "img/sad-dog.png";
        phEle1.textContent = "Johny";
    
        preImgEle2.src = "img/big-cat.png";
        phEle2.textContent = "Veeran";
    
        preImgEle3.src = "img/last-d.png"
        phEle3.textContent = "Kurama";
} 

rightArrowEle.onclick = function() {
    preImgEle1.src = "img/small-kitty.png";
    phEle1.textContent = "Katrine";

    preImgEle2.src = "img/brown-dog-sitting-with-tongue-out.jpg";
    phEle2.textContent = "Jennifer";

    preImgEle3.src = "img/cute-spitz.jpg";
    phEle3.textContent = "Kurama";
}