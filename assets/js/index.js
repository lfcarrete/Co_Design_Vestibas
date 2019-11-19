document.addEventListener('DOMContentLoaded', function() {

   let open = 0

   document.querySelector(".menu_img").addEventListener("click", function(){
         if (open == 0){
            document.querySelector(".menu").style.display = "block";
            open += 1;
         }
         else if (open ==1){
            document.querySelector(".menu").style.display = "none";
            open -= 1;
         }
   });
})


