

$( document ).ready(
  function (){
    console.log("hello world");
    $("li").mouseenter(
      function(){
        console.log($(this).children().hasClass("dropdown"));
        if ($(this).children().hasClass("dropdown") == true) {
          $(this).children().toggleClass("this-active")
        }
      }
    )
      $(".dropdown").mouseleave(
        function(){
           $(".dropdown").removeClass("this-active")
      }
    )
  }
)
