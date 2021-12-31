/*document.querySelectorAll("button")[0].addEventListener("click", gotClicked);
document.querySelectorAll("button")[1].addEventListener("click", gotClicked);
document.querySelectorAll("button")[2].addEventListener("click", gotClicked);
document.querySelectorAll("button")[3].addEventListener("click", gotClicked);
document.querySelectorAll("button")[4].addEventListener("click", gotClicked);
document.querySelectorAll("button")[5].addEventListener("click", gotClicked);
document.querySelectorAll("button")[6].addEventListener("click", gotClicked);*/
alert("Pls Refresh the page before going to another song or if anything happens goodluck you can mashup also😁😊😁");
alert("click on the songs and feel the magic");
var le=document.querySelectorAll(".drum");
for(var i=0;i<le.length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var key=this.innerHTML;
    gotClicked(key);
  });
}
function gotClicked(key)
{

  switch(key){
    case "w":
    var tom1 = new Audio("sounds/Ajj Din Chadheya.mp3");
    tom1.play();
    if(count===2)
    {
      tom1.pause();
    }
    break;
    case "a":
    var tom2 = new Audio("sounds/Dil Mere.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/Dildaara.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/Hamdard.mp3");
    tom4.play();
    break;
    case "j":
    var kick = new Audio("sounds/Kun Faya Kun.mp3");
    kick.play();
    break;
    case "k":
    var crash = new Audio("sounds/Soch Na Sake.mp3");
    crash.play();
    break;
    case "l":
    var snare = new Audio("sounds/Tum Se Hi.mp3");
    snare.play();
    break;
    default:
    alert("error");
  }
//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
}
document.addEventListener("keypress", function(event){
  gotClicked(event.key);
});
