requirejs(['./main'],function (main){
     requirejs(['app/index1nav','app/cwmenu','app/zhuti','app/search','app/zhuti2'],function(nav,nav1,nav2,nav3,nav4){
        //调用nav模块的方法
        var root = document.querySelector("#navshu ul");
        nav(root);

        var root1=document.querySelector('#caidan ul');
        nav1(root1);

        var root2=document.querySelector('#zhuti ul');
        nav2(root2);

        var root3=document.querySelector('#search');
        nav3(root3);

        var root4=document.querySelector('#zhuti2 ul');
        nav4(root4);
        
        $('#bannerTopGb').click(function(){
            $(this).parent().remove()
        })
        $('#gudingimg').click(function(){
            $(this).parent().remove()
        })
        $('#aa1').click(function(){
            $('#zhuti2').css('display','none');
            $('#zhuti').css('display','block');
            $(this).parent().css('background','#00b081');
            $(this).parent().siblings().css('background','#33312e');
            $("#aa3").parent().css('display','block')

        })
        $('#aa2').click(function(){
            $('#zhuti').css('display','none');
            $('#zhuti2').css('display','block');
            $(this).parent().css('background','#00b081');
            $(this).css('color','white');
            $(this).parent().siblings().css('background','#33312e');


        });
         $('#aa3').click(function(){
            $('#zhuti').css('display','none');
            $('#zhuti2').css('display','block');
            $(this).parent().siblings().css('background','#33312e');
            $(this).parent().css('display','none');
            $('#aa2').parent().css('background','#00b081');
            $('#aa2').css('color','white');


        })
        $('.fly').parent().mouseenter(function(){
            $(this).children().css('display','block')
        })
        $('.fly').mouseleave(function(){
            $(this).css('display','none')
        })

         $('.fly1').parent().mouseenter(function(){
            $(this).children().css('display','block')
        })
        $('.fly1').mouseleave(function(){
            $(this).css('display','none')
        })

    });




});
