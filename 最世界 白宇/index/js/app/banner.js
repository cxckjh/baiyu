
define(['jquery','myutil','app/myfn'],function ($,x,url){
	 function getNav2Data(root2) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/zbanner');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
              var navs2= JSON.parse(xhr.responseText);
              navs4(navs2);
               
               
            } 

        }      
    } 
   function navs4(data){
      data.forEach(function (elem, index) {
                  var li =$('<li></li>').appendTo($('#bannerMain>ul'));
                  li.css('background','url('+elem['imgUrl']+')').css('left',index*100+'%');
                });
      var i=0;
      var btn=$("#bannerMainBtn button");
      var timer=setInterval(row,2000)
      function row(){
          if (i==data.length) {
            i=0;
          }else{
            $('#bannerMain>ul').animate({
              'left':(-i*100) + "%"
            })
            i++;

            $(btn).css('background','white');
            $(btn).eq(i-1).css('background','red');

          }
      }

    $("#bannerMain>ul").mouseenter(function(event) {
      clearInterval(timer);
    }).mouseleave(function(event) {
        timer=setInterval(row,2000)
    });
   
    btn.each(function(a, elem) {
      (function(m){
        $(elem).click(function() {
          clearInterval(timer);

          // 相应按钮变色
          $(this).css('background','red');
          var that=$(this).siblings()
          that.css('background','white');
          console.log(that)

          // 图片
          $("#bannerMain>ul").css('left',(-$(this).index()*100) + "%");
          return i = m;
        });
      })(a);
    });
 

$("#bannerMainImg1,#bannerMainImg2").mouseenter(function(){
  clearInterval(timer)
  $("#bannerMainImg1").click(function (){
      i--;
      if (i== -1) {
        i=2;
      }
      $(btn).css('background','white');
      $(btn).eq(i).css('background','red');
      $("#bannerMain>ul").css('left',(-i*100) + "%");
      console.log(i)
   })
   $("#bannerMainImg2").click(function (){
      i--;
      if (i== -1) {
        i=2;
      }else{ 
        $(btn).css('background','white');
        $(btn).eq(i).css('background','red');
        $("#bannerMain>ul").css('left',(-i*100) + "%");
      console.log( $("#bannerMain>ul").css('left'))
    }
     
   })

}).mouseleave(function(){
  timer=setInterval(row,2000)
})
    


  }

    

    return getNav2Data;
    
  
})