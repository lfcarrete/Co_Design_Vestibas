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
   function clickAnim(facul){
      document.querySelector("${facul}").style.boxShadow = "0.25rem 0.5rem #888888";
      document.querySelector("${facul}").style.transform = "translate(.5rem, .5rem)";
   }
   for(i = 1; i < 7; i++) {
      document.querySelector(".facul${i}").addEventListener("click",function(){
      clickAnim(document.querySelector(".facul${i}"));
      })
   }
})


