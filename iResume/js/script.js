$( document ).ready(function() {
                
                $("#skills_scroll").fadeOut();   
                $("#contact_scroll").fadeOut();

                $("#skills").click(function(){
                    $("#index").fadeOut();
                    $("#skills_scroll").fadeIn();
                    
                    $('#skills_right').addClass('animated slideInRight');
                    });
                $("#contact").click(function(){
                    $("#index").fadeOut();
                    $("#contact_scroll").fadeIn();
                    $('#contact_left').addClass('animated slideInLeft');
                    $('#contact_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});