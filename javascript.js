const container=document.querySelector(".container");
const card=document.querySelector(".card");
const apple=document.querySelector(".apple img");
const title=document.querySelector(".title");
const iformation=document.querySelector(".iformation h3");
const colors=document.querySelector(".colors");
const purchase=document.querySelector(".purchase");

container.addEventListener("mousemove",(e)=>{
    let xAxis=(window.innerWidth/2-e.pageX)/15;
    let yAxis=(window.innerHeight/2-e.pageY)/15;
card.style.transform=`rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener("mouseenter",(e)=>{
    card.style.transition="none";
    apple.style.transform="translateZ(200px) rotateZ(45deg)";
    title.style.transform="translateZ(150px)";
    iformation.style.transform="translateZ(120px)";
    colors.style.transform="translateZ(100px)";
    purchase.style.transform="translateZ(80px)";
});

container.addEventListener("mouseleave",(e)=>{
    card.style.transition="all 1s ease";
    card.style.transform=`rotateY(0deg) rotateX(0deg)`;
    apple.style.transform="translateZ(0) rotateZ(0deg)";
    title.style.transform="translateZ(0)";
    iformation.style.transform="translateZ(0)";
    colors.style.transform="translateZ(0)";
    purchase.style.transform="translateZ(0)";
});