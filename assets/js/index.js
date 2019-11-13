document.addEventListener('DOMContentLoaded', function() {

   let menu_img = document.querySelector(".menu_img")
   let menu = document.querySelector(".menu")

   let open = 0

   menu_img.addEventListener("click", function(){
         if (open == 0){
            menu.style.display = "block";
            console.log("open");
            open += 1;
         }
         else if (open ==1){
            menu.style.display = "none";
            console.log("close");
            open -= 1;
         }
   })
})


