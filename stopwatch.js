
        let seconds=0;
       
        document.querySelector(".start").addEventListener("click",function(){ 
           
           this.setAttribute("disabled","");
           document.querySelector(".stop").removeAttribute("disabled");
           document.querySelector(".reset").setAttribute("disabled","");

           function timer(){
            ++seconds; 
           
        let msec=seconds%100;
        let second=Math.floor(seconds/100);
        let hours= Math.floor(second/3600);
        let mins= Math.floor((second-(hours*3600))/60);
        let secs= second% 60;


                if(msec<=10)msec="0"+msec;
                if (secs<10)secs= "0"+ secs;
                if (mins<10)mins= "0"+ mins;
                if (hours<10)hours= "0"+ hours;
        document.querySelector(".time").innerHTML=`${hours}`+":"+`${mins}`+":"+`${secs}`+":"+`${msec}`;
        } 
          let id= setInterval(timer,10);    
      
        
       
        document.querySelector(".stop").addEventListener("click",function() {
        clearInterval(id);
        this.setAttribute("disabled","");
        document.querySelector(".start").removeAttribute("disabled");
        document.querySelector(".reset").removeAttribute("disabled");

        document.querySelector(".reset").addEventListener("click",function(){
            this.setAttribute("disabled","")
            seconds=null
            document.querySelector(".start").removeAttribute("disabled");
            document.querySelector(".time").innerHTML="00:00:00:00";
        })
        })
    })




