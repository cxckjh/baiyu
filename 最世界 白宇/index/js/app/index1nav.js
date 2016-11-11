/**
 * Created by Administrator on 2016/11/7.
 */
define(['jquery','myutil','app/myfn'],function ($,x, url) {
    function getNavData(root) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/znav');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                //console.log(xhr.responseText);
                //f(xhr.responseText);
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
                    //
                    var a =$("<a href=''></a>").appendTo($("<li></li>").appendTo(root));
                    a.html(elem["name"]);
                    a.attr('href',elem["url"])
                })
            }
        }



//es6 ajax
// var getJSON = function(url) {
//     var promise = new Promise(function(resolve, reject){
//         var client = new XMLHttpRequest();
//         client.open("GET", url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept", "application/json");
//         client.send();

//         function handler() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if (this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };
//     });

//   return promise;
// };

// getJSON("http://10.0.161.49:7900/znav").then(function(json) {
//   console.log(json);
// }, function(error) {
//   console.error('出错了', error);
// });





    }
    return getNavData;
});