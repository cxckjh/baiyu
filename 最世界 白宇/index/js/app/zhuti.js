define(['jquery','myutil','app/myfn'],function ($,x,url){
	 function getNav4Data(root2) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/zcityWalk1');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
              var navs7 = JSON.parse(xhr.responseText);
                console.log(navs7)
                navs7.forEach(function (index,elem) {
                   var li=$('<li class="zhutili"></li>').appendTo(root2)
                       var img=$('<img src='+index['imgurl']+'>').appendTo(li);
                       var img=$('<img src="images/xingxing.png" class="xingxing">').appendTo(li);
                       var span=$('<span>'+index['address']+'</span>').appendTo(li);
                       var h2=$('<h2><a href="#">'+index['title']+'</a></h2>').appendTo(li);
                       for (var i = 0; i < index["introduce"].length; i++) {
                          var p=$('<p>'+index["introduce"][i]+'</p>').appendTo(li)
                       };
                       var div1=$('<div id="jiage"><span>'+index["oldPrice"]+'元</span><span><span>'+index["newPrice"]+'</span>元起</span></div>').appendTo(li);
                       var input=$('<input type="image" src="images/yuding.png"> ').appendTo(li)
                       input.css({
                            float:"right",
                            'margin-top':'224px'
                       })
                       var div2=$('<div id="fangwen"><span><span>'+index['browseCount']+'</span>次浏览</span><span><span>'+index['soldCount']+'</span>件已售</span></div>').appendTo(li)
                       
                    })
            }
        }
    }
    return getNav4Data;


})