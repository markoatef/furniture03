$(document).ready(function(){
    // navebar doggler
    $(".navbar-toggler").on('click', function(){
        $('nav .one').toggleClass("top");
        $('nav .tow').toggleClass("hadden");
        $('nav .three').toggleClass("bottom");
          
       
    })
    // navbar css
    $(window).scroll(function(){
        if($(window).scrollTop() >=200){
            $('nav').css({
                "background":"#021d2d"
            })
        }else{
            $('nav').css({
                "background":" rgba(0, 0, 0, .5)"
            })
        }
    })

       //navbar ,class active , smooth scroll
       $("nav li a").on('click', function(e){
        e.preventDefault();
        //add class active
        $(this).addClass('active').parent().siblings().find("a").removeClass('active');
    //   smooth scroll
        $('html,body').animate({
            scrollTop:$("#" + $(this).data('scroll')).offset().top -80
        },1000);
    })

    // mix it up
    var mixer = mixitup('.gallary');
    // venobox
    $(document).ready(function(){
        $('.venobox').venobox(); 
      });

    $(window).scroll(function(){
        $('section').each(function(){
            if($(window).scrollTop()+100 >= $(this).offset().top){
                var secid=$(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav li a[data-scroll="'+secid +'"]').addClass('active');
            }
        })
    })

    // botton up
    $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $(".button-up").fadeIn(1000);
        }else{
            $(".button-up").fadeOut(1000);
        }
    })    
    $('.button-up').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        })
    })

    // nice scroll
    $(function() {  
        $("body").niceScroll({
            cursorcolor:'#ff275e',
            cursorwidth:'8px',
            cursorborder:'none',
            zindex:'99999'
        });
    });
    



})