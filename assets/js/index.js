document.addEventListener('DOMContentLoaded', function() {

   let open = 0

   document.querySelector(".menu_img").addEventListener("click", function(){
         if (open == 0){
            document.querySelector(".menu").style.display = "block";
            console.log("open");
            open += 1;
         }
         else if (open ==1){
            document.querySelector(".menu").style.display = "none";
            console.log("close");
            open -= 1;
         }
   });
   document.querySelector(".facul1").addEventListener("click",function(){
      document.querySelector(".facul1").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul1").style.transform = "translate(.5rem, .5rem)";
   })
   document.querySelector(".facul2").addEventListener("click",function(){
      document.querySelector(".facul2").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul2").style.transform = "translate(.5rem, .5rem)";
   })
   document.querySelector(".facul3").addEventListener("click",function(){
      document.querySelector(".facul3").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul3").style.transform = "translate(.5rem, .5rem)";
   })
   document.querySelector(".facul4").addEventListener("click",function(){
      document.querySelector(".facul4").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul4").style.transform = "translate(.5rem, .5rem)";
   })
   document.querySelector(".facul5").addEventListener("click",function(){
      document.querySelector(".facul5").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul5").style.transform = "translate(.5rem, .5rem)";
   })
   document.querySelector(".facul6").addEventListener("click",function(){
      document.querySelector(".facul6").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector(".facul6").style.transform = "translate(.5rem, .5rem)";
   })
})


