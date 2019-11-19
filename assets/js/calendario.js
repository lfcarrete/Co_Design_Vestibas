document.addEventListener('DOMContentLoaded', function() {
   
   function select(dia){
      document.querySelector(String(dia)).style.backgroundColor = "rgb(0, 170, 250)";
   }
   function clear(){
      for(i=1;i<32;i++){
         document.querySelector(".dia"+i).style.backgroundColor = "rgb(100, 202, 250)";
         document.querySelector(".valor").style.display = "none";
      }
   }
   function setValor(valor){
      document.querySelector(".valor").innerHTML = valor;
      document.querySelector(".valor").style.display = "block";
   }

   document.querySelector(".dia1").addEventListener("click", function(){
      clear();
      select(".dia1")
;   });
   document.querySelector(".dia2").addEventListener("click", function(){
      clear();
      select(".dia2")
      let valor = "Palestra com Engenheiro Civil."
      setValor(valor);
;   });
   document.querySelector(".dia3").addEventListener("click", function(){
      clear();
      select(".dia3")
;   });
   document.querySelector(".dia4").addEventListener("click", function(){
      clear();
      select(".dia4")
;   });
   document.querySelector(".dia5").addEventListener("click", function(){
      clear();
      select(".dia5")
;   });
   document.querySelector(".dia6").addEventListener("click", function(){
      clear();
      select(".dia6")
;   });
   document.querySelector(".dia7").addEventListener("click", function(){
      clear();
      select(".dia7")
;   });
   document.querySelector(".dia8").addEventListener("click", function(){
      clear();
      select(".dia8")
;   });
   document.querySelector(".dia9").addEventListener("click", function(){
      clear();
      select(".dia9")
;   });
   document.querySelector(".dia10").addEventListener("click", function(){
      clear();
      select(".dia10");
   });
   document.querySelector(".dia11").addEventListener("click", function(){
      clear();
      select(".dia11");
      let valor = "Palestra com Engenheiro de Computação."
      setValor(valor);
   });
   document.querySelector(".dia12").addEventListener("click", function(){
      clear();
      select(".dia12");
   });
   document.querySelector(".dia13").addEventListener("click", function(){
      clear();
      select(".dia13");
   });
   document.querySelector(".dia14").addEventListener("click", function(){
      clear();
      select(".dia14");
   });
   document.querySelector(".dia15").addEventListener("click", function(){
      clear();
      select(".dia15");
   });
    document.querySelector(".dia16").addEventListener("click", function(){
      clear();
      select(".dia16");
   });
   document.querySelector(".dia17").addEventListener("click", function(){
      clear();
      select(".dia17");
   });
   document.querySelector(".dia18").addEventListener("click", function(){
      clear();
      select(".dia18");
   });
   document.querySelector(".dia19").addEventListener("click", function(){
      clear();
      select(".dia19");
   });
   document.querySelector(".dia20").addEventListener("click", function(){
      clear();
      select(".dia20");
      let valor = "Dia de Prova da ABC."
      setValor(valor);
   });
   document.querySelector(".dia21").addEventListener("click", function(){
      clear();
      select(".dia21");
   });
   document.querySelector(".dia22").addEventListener("click", function(){
      clear();
      select(".dia22");
      let valor = "Dia de Prova do Ibmec."
      setValor(valor);
   });
   document.querySelector(".dia23").addEventListener("click", function(){
      clear();
      select(".dia23");
   });
   document.querySelector(".dia24").addEventListener("click", function(){
      clear();
      select(".dia24");
      let valor = "Dia de Prova da Fuvest."
      setValor(valor);
   });
   document.querySelector(".dia25").addEventListener("click", function(){
      clear();
      select(".dia25");
   });
   document.querySelector(".dia26").addEventListener("click", function(){
      clear();
      select(".dia26");
   });
   document.querySelector(".dia27").addEventListener("click", function(){
      clear();
      select(".dia27");
   });
   document.querySelector(".dia28").addEventListener("click", function(){
      clear();
      select(".dia28");
   });
   document.querySelector(".dia29").addEventListener("click", function(){
      clear();
      select(".dia29");
   });
   document.querySelector(".dia30").addEventListener("click", function(){
      clear();
      select(".dia30");
   });
   document.querySelector(".dia31").addEventListener("click", function(){
      clear();
      select(".dia31");
   });
})


