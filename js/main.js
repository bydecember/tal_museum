
  $(document).ready(function(){ //시작

    var swiper = new Swiper(".mySwiper", {//스와이프 시작
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });//끝

    $(".go_top").click(function(){//go_top 시작====================


      var int = $("#head").offset().top;
      $("html, body").stop().animate({scrollTop : 0},300);
    });//top 끝
    $(window).scroll(function(){//scroll 이벤트시작 ================
      var positon = $(window).scrollTop();
      if(positon > 100){
        $(".go_top").slideDown();
      }else{
        $(".go_top").slideUp();
      }

    });//scroll 끝
    $(".h_btn .open").click(function(){//메뉴오픈이벤트시작
      if($("header .menu").css("display")== "none"){
        $("header .menu").css("display","block");
      }
    });//메뉴오픈이벤트 끝
    $(".close").click(function(){//메뉴클로즈이벤트시작
      if($(".close").css("display")== "block"){
        $("header .menu").css("display","none");
      }
    });//메뉴클로즈이벤트 끝

});//끝

