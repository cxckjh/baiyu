

define(['jquery','myutil','app/myfn'],function ($,x, url) {
	function getNav3Data(root3) {
 		$('#searchtext').focus(function(){
			$('#search').off('mouseleave');
				$('#searchtext').keyup(function(){
				$("#searchtext1").css('display','block');
				$("#searchtext1 li").remove();
				var rq=$("#searchtext").val();
				var time=new Date()
				// console.log(rq);
				$.ajax({
					url:"http://10.0.161.49:7900/ajax",
					data:{
						keyword:rq,
						data:time
					},
					type:'get'
					
				}).done(function (data){
					
						var shuju=data.data.list;
						console.log(shuju);
						$(shuju).each(function (index1,elem1){
							if(elem1.word == undefined){
								var li= $('<li class="searchtext1li2"></li>').appendTo($("#searchtext1"));
								var a=$('<a href=' + elem1.url +'></a>').appendTo(li);
								var p=$('<p>'+ elem1['belong_name']
 +'</p>' ).appendTo(a)
								var span=$('<span>'+elem1['cn_name']+'</span>').appendTo(a)

								var img=$('<img src='+elem1.src+'>').appendTo(li)

							}else{
								$('<li class="searchtext1li"><a href=' + elem1.url +'>' + elem1.word + '</a></li>').appendTo($("#searchtext1"));

							}

						})
						
					})
					
				})
				

		});
		$('#searchtext').blur(function(){
			$('#searchtext').val('');
			$('#searchtext').hide().animate({
				width:'0px'
			},500);
			$("#searchtext1").css('display','none');

		// 	$('#search').mouseleave(function(){
		// 	$('#searchtext').hide().animate({
		// 		width:'0px'
		// 	},500);
		// 	$("#searchtext1").css('display','none').val('')
		// });
		})
		

		$('#search').mouseenter(function(){
			
			$('#searchtext').show().animate({
				width:'200px'
			},500)

		}).mouseleave(function(){
			$('#searchtext').hide().animate({
				width:'0px'
			},500);
			$("#searchtext1").css('display','none')
		});
		

   }
    return getNav3Data;
});




// var http = require('http');
//suggest组件
/*app.get('/sitesearch/:keyword' , function (req , res) {
	var url = req.params.keyword;
    // 查询本机ip
    // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
    var sreq = http.request({
        host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
        method:   'get' // 请求方式
    }, function(sres){
        sres.pipe(res);
        sres.on('end', function(){
            console.log('done');
        });
    });
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
}*/


// app.get('/sitesearch',function(req,res){

//     //获取用户传递过来的参数
//     var arg = req.query['kw'];
//     httpSearch(arg,function(info){
//         res.send(JSON.parse(info));
//     });
//     console.log(req.query['kw']);
// });

// function httpSearch(kwVal,callback){
//     http.get('http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=' + kwVal, function(httpRes) {
//         var buffers = [];
//         httpRes.on('data', function(chunk) {
//             buffers.push(chunk);
//         });
//         httpRes.on('end', function(chunk) {
//             var wholeData = Buffer.concat(buffers);
//             var dataStr = wholeData.toString('utf8');
//             callback(wholeData);
//         });
//     }).on('error', function(e) {
//         console.log(e);
//     });
// }



// function handleData(data){
// 			// console.log(ul);
// 			$(data).each(function(index, el) {
// 				console.log(el)
// 				if(el.word == undefined){
// 					$('<li><a href="#"><dl><dt><img src=' + el.src +' alt="" /></dt><p><span>' + el.cn_name +'</span><span>' + el.en_name +'</span></p><p><span>' + el.belong_name +'</span></p></dl></a></li>').appendTo(ul);
// 				}else{
// 					$('<li class="word"><a href=' + el.url +'>' + el.word + '</a></li>').appendTo(ul);
// 				}
// 			});
// 		}
