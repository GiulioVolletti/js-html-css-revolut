

$( document ).ready(
  function (){
    console.log("hello world");
    $("li").mouseenter(
      function(){
        console.log($(this).children().hasClass("dropdown"));
        if ($(this).children().hasClass("dropdown") == true) {
          $(this).children().addClass("this-active")          
        }
      }
    )
      $("li").mouseleave(
        function(){
           $(".dropdown").removeClass("this-active")
      }
    )
  }
)
