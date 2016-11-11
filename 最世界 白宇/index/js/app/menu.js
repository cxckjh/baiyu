

define(['jquery','myutil','app/myfn'],function ($,x,url){
	 function getNav1Data(root1) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/zmenu');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
              var navs1 = JSON.parse(xhr.responseText);
                navs1.forEach(function (elem, index) {
                    var li=$("<li></li>").appendTo(root1);
                    var p =$("<p></p>").appendTo(li);
                    var div=$('<div></div>').appendTo(li)
                    p.html(elem["title"]);
                    for (var i = 0; i < elem["mainCity"].length; i++) {
                        
                        var a=$("<a href='#'></a>").appendTo(li);
                        a.html(elem["mainCity"][i]);

                    };
                    elem["moreCity"].forEach(function (elem1) {
                        var city=$('<div></div>').appendTo(div);
                        var h3=$('<h3></h3>').appendTo(city);
                        h3.html(elem1.cityName)
                       if (elem1.cityName!='主题推荐') {
                            elem1["items"].forEach(function (elem2){
                            var a=$('<a href="#"></a>').appendTo(city);
                            a.html(elem2);
                            
                        })
                       }else{
                           elem1["items"].forEach(function (elem2,index2) {
                            var img=$('<img>').appendTo(city);
                            img.attr('src',elem1["items"][index2]).attr('class','itemsImg')
                           })
                       }
                    })
                    var img=$('<img>').appendTo(div);
                    img.attr('src',elem['moreCityImg']);
                   $('#navshu>ul>li:eq(5)>div>img').remove();
                $('#navshu>ul>li').on('mouseenter',function(e){
                    $(this).children('div').css('display','block');
                    $(this).siblings().children('div').css('display','none');
                    $(this).css('background','white');
                    $(this).children(p).css('color','black')
                }).on("mouseleave",function(e){
                    $(this).children('div').css('display','none');
                    $(this).siblings().children('div').css('display','none');
                    $(this).css('background','#082c44');
                    $(this).children(p).css('color','white')
                })

                })
            }
        }
    }
    return getNav1Data;


})