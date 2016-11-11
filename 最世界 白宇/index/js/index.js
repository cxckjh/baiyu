//我定义的模块
requirejs(['main'],function (main) {
    requirejs(['app/index1nav','app/menu','app/banner','app/search','app/freewalk'],function(nav,nav1,nav2,nav3,nav4){
        //调用nav模块的方法
        var root = document.querySelector("#navMiddle>ul");
        nav(root);

        var root1=document.querySelector('#navshu>ul');
        nav1(root1);

        var root2=document.querySelector('#bannerMain>ul');
        nav2(root2);

        var root3=document.querySelector('#search');
        nav3(root3);

        var root4=$('.main2>ul');
        nav4(root4);

        
        $('#bannerTopGb').click(function(){
            $(this).parent().remove()
        })
        $('#gudingimg').click(function(){
            $(this).parent().remove()
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




})
