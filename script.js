const selecton=document.querySelector(".Selecton");
const img=document.querySelector("img");
const down=document.querySelector(".down");
const divs=down.querySelectorAll("div");
console.log(divs);
selecton.addEventListener("click",()=>{
    if(img.style.rotate=="0deg"){
        img.style.rotate="180deg";
    }
    else{
        img.style.rotate="0deg"
    }
    if(down.style.display=="none"){
        down.style.display="block"
    }
    else{
        down.style.display="none"
    }

})

Array.from(divs).forEach(element => {
    element.addEventListener("click",(e)=>{
         selecton.querySelector("p").innerHTML=e.target.innerHTML;
         if(img.style.rotate=="0deg"){
            img.style.rotate="180deg";
        }
        else{
            img.style.rotate="0deg"
        }
         if(down.style.display=="none"){
            down.style.display="block"
        }
        else{
            down.style.display="none"
        }
    })
});
