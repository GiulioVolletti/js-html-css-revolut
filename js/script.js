

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
           $("a").removeClass("this-active")
      }
    )

    $(".bonus").mouseenter(
      function(){
        console.log($(this).children().hasClass("bonus-container"));
        if ($(this).children().hasClass("bonus-container") == true) {
          $(this).children().toggleClass("this-active")
        }
      }
    )
      $(".bonus-container").mouseleave(
        function(){
           $(".bonus-container").removeClass("this-active")
           $("a").removeClass("this-active")
      }
    )
  }
)
