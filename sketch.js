let player = document.getElementById("player");
let block = document.getElementById("block");

let jump = ()=>{
    if(player.classList == "playerJ"){
        return
    }
    player.classList.add("playerJ");

    setTimeout(()=>{
        player.classList.remove("player");
    },500);
}
    
let checkcollision = setInterval(()=>{
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let playertop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    if(blockLeft <= 30 && blockLeft >= 10 && playerTop >= 130){
        block.style.animation = "none";
        alert("GAME OVER");
    }
},10);



 



 
