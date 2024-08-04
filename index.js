var num=document.querySelectorAll(".drum").length;
var i=0;
for(i=0;i<num;i++)
{

    document.querySelectorAll("button")[i].addEventListener("click",function(){
    var identity=this.innerHTML;
    makeSound(identity);
    makeOpa(identity);

   
    });
}



document.addEventListener("keydown",function(event){
    makeSound(event.key);
    makeOpa(event.key);


})


function makeSound(key){


    switch (key) {
        case "w":
            var audio = new Audio('./sounds/snare.mp3');//constructor
            audio.play();//constructor function

            
            break;
        case "a":
            var audio = new Audio('./sounds/kick.mp3');
            audio.play();
    
                
                break;
        case "s":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            
                        
                 break;
        case "d":
            var audio = new Audio('./sounds/kick.mp3');
            audio.play();
        
                    
                  break;
        case "j":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
                
                            
                    break;
        case "k":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
                        
                                    
                    break;
    
        case "l":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
                                    
                                                
                    break;                                            
                
            
    
        default:
            console.log("hELLO");
            break;
    }

}

function makeOpa(key)

{
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}