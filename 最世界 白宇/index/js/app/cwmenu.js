define(['jquery','myutil','app/myfn'],function ($,x,url){	 
	function getNav1Data(root1) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/zmenu');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
              var navs1 = JSON.parse(xhr.responseText);
               
            }
        }
    }
    return getNav1Data;


})