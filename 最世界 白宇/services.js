const express=require("express");
var http=require("http");
var fs=require("fs");

var app =express();
var gData=null;

fs.readFile("index/js/jsonData/nav1.json",function (err,data){
	if(err)
		throw new Error("读取数据出错")
	gData=data;
	fs.readFile("index/js/jsonData/menu.json",function (err,data1){
		if(err)
			throw new Error("读取数据出错")
		gData1=data1;
		fs.readFile("index/js/jsonData/banner.json",function (err,data2){
			if(err)
				throw new Error("读取数据出错")
			gData2=data2;
			fs.readFile("index/js/jsonData/freeWalk.json",function (err,data3){
				if(err)
					throw new Error("读取数据出错")
				gData3=data3;
				fs.readFile("index/js/jsonData/cityWalkList.json",function (err,data4){
					if(err)
					throw new Error("读取数据出错")
					gData4=data4;
					fs.readFile("index/js/jsonData/cityWalkList1.json",function (err,data5){
						if(err)
						throw new Error("读取数据出错")
						gData5=data5;
						app.listen(7900);//端口号
						console.log("服务已启动");
					})
				})
			})
		})
	
	});

});



// app.use(express.static('index'));//项目放在index文件夹中,可以通过ip/index.html访问主页
app.use(express.static('index'));
app.all('/*',function (req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
})

app.get("/znav",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData);
})
app.get("/zmenu",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData1);
})
app.get("/zbanner",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData2);
})
app.get("/zfreeWalk",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData3);
})

app.get("/zcityWalk",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData4);
})

app.get("/zcityWalk1",function (req,res){
	res.setHeader("Content-Type","application/json");
	res.send(gData5);
})


//suggest组件
var http = require('http');
app.get("/ajax",function (req,res){
	res.setHeader("Content-Type","application/json");
	var fanhuizih=req.query.keyword;//query拿到req数据中的keyword值
	console.log(fanhuizih);
	
	//固定的套路 服务器之前互相传递数据
	var sreq = http.request({//向目标的服务器请求数据
		host:     'z.qyer.com', // 目标主机
        path:     '/qcross/home/ajax?action=sitesearch&keyword='+fanhuizih, // 目标路径
        method:   'get' // 请求方式
	},function(sres){//
        sres.pipe(res);//相当于一个管道，将两个服务器连通
        sres.on('end', function(){//绑定结束事件 
            console.log('done');
        });
    })
    if (/POST|PUT/i.test(req.method)) {
        req.pipe(sreq);
    } else {
        sreq.end();
    }
	
})





// app.get('/sitesearch/:keyword' , function (req , res) {
// 	var url = req.params.keyword;//params拿到req数据中的keyword值
//     // 查询本机ip
//     // http://z.qyer.com/qcross/home/ajax?action=sitesearch&keyword=b&timer=1478686648677&_=1478678019964
//     var sreq = http.request({
//         host:     'z.qyer.com', // 目标主机
//         path:     '/qcross/home/ajax?action=sitesearch&keyword='+url, // 目标路径
//         method:   'get' // 请求方式
//     }, function(sres){
//         sres.pipe(res);
//         sres.on('end', function(){
//             console.log('done');
//         });
//     });
//     if (/POST|PUT/i.test(req.method)) {
//         req.pipe(sreq);
//     } else {
//         sreq.end();
//     }
// }


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
