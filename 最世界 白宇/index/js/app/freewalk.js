
define(['jquery','myutil','app/myfn'],function ($,x,url){
	 function getNav4Data(root4) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/zfreeWalk');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
              var navs6 = JSON.parse(xhr.responseText);
                navs6.forEach(function (elem, index) {
                    var li=$("<li></li>").appendTo(root4);
                    var a=$("<a href=''></a>").appendTo(li);
                  	var div=$('<div></div>').appendTo(li)
                  	a.html(elem["title"]);

                  	elem['data'].forEach(function (elem1,index){
                  		var divs=$('<div></div>').appendTo(div)
                  		var img=$('<img>').appendTo(divs);
                  		img.attr('src',elem1['imgUrl'])

                  		var h3=$('<h3></h3>').appendTo(divs);
                  		h3.html(elem1['title']);
                  		var p=$('<p></p>').appendTo(divs);
                  		p.html(elem1['time']);
                  		var span=$('<span></span>');
                  		span.html(elem1['price']);

                  		$('.main2>ul>li').on('mouseenter',function(e){
	                   		console.log($(this).children('div'))

	                   		$(this).children('div').css('display','block').animate({opacity:'1'},1000);
	                    	$(this).siblings().children('div').css('display','none').css('opacity','0.5');
	                    	
	               			 })
                  		
                  	})
					
                })
            }
        }
    }
    return getNav4Data;


})