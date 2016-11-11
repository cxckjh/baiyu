
//定义一个IIFE，把工具里的变量从全局的变成局部的
(function(g){
	//我的工具
	function MyUtil(info,baseUrl){
		this.info = info;
		this.baseUrl=baseUrl;
	}

	//打印msg指定内容，并且附加打印的时间
	MyUtil.prototype.print = function(msg){
		console.log("时间：" + this.handleDate() + "；打印：" + msg);
	}

	//把当前日期以字符串的形式返回
	MyUtil.prototype.handleDate = function(){
		//2016-10-11 11:13:50
		var now = new Date();
		var result = now.getFullYear() + "-" +
	 	(now.getMonth() + 1) + "-" +  now.getDate();
		return result;
	}

	/**
	 * 判断指定的属性是不是指定对象原型上的属性，
 	* 是返回true，否则返回false
 	* @param  {Object}  obj  [判定的对象]
 	* @param  {String}  prop [指定的属性]
 	* @return {Boolean}      
 	*/
	
	MyUtil.prototype.isPrototype = function(obj, prop){
		return !obj.hasOwnProperty(prop) && (prop in obj);
	}

	//创建ajax对象
	MyUtil.prototype.createXHR=createXHR;
	function createXHR(){
			//如果浏览器支持XMLHttpRequest那么直接创建返回该对象
			if (typeof XMLHttpRequest != 'undefined'){
				return new XMLHttpRequest();
			}else if(typeof ActiveXObject != 'undefined'){
				if (typeof arguments.callee.activeXString != 'string'){
					var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
					for(var i = 0; i < versions.length;i++){
						try{
							new ActiveXObject(versions[i]);
							arguments.callee.activeXString = versions[i]
						}catch(e){

						}
					}
				}
				return new ActiveXObject(arguments.callee.activeXString);
			}else{
				throw new Error("没法正常的创建ajax对象");
			}
		}
	MyUtil.prototype.ajax=ajax;

	//封装，把擦书封装到对象中

		//封装，把参数封装到对象中
		function ajax(obj){
			//1.创建一个XMLHttpResquest
			var xhr=createXHR();
			obj.url=obj.url+'?rand='+Math.random();//在不影响请求的地址时，用随机数为了使浏览器认为每次访问都是一个新的请求
			//2.初始化
			if(obj.async==true){
				xhr.open(obj.method,obj.url)//如果真 发异步
			}else{
				xhr.open(obj.method,obj.url,false)//如果假 发同步
			}
			//3.发送
			if (obj.sendType== 'application/json') {
				xhr.setRequestHeader('Content-type','application/json');
				xhr.send(JSON.stringify(obj.data));
			}else if(obj.sendType== 'application/x-www-form-urlencoded'){
				xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
				xhr.send(handleData(obj.data));
			}else{
				throw new Error('其他的发送格式未支持')
			}

			// xhr.setRequestHeader('Content-type','application/json');
			// xhr.setRequestHeader('Content-type','application/www-form-urlencoded');
			//正常表单的传递格式：bookname=123&price=100...
			//4.响应处理
			xhr.onreadystatechange=function(){
				if (xhr.status==200||xhr.status==304) {
					if (xhr.readyState==4) {
						callback();//回调函数,数据接收成功后调用函数 
					}
				}
			
			}
			function callback(){
				obj.success(xhr.responseText)
			}

		}
		function handleData(data){
			var ar=[];
			for (var p in data){
				ar.push(p+'='+data[p]);
			}
			return ar.join('&');
		}

		var mTool = new MyUtil("cohen.lee的工具",'http://10.0.161.193:8080');
		//如何获取window？
		g.tool=mTool;
})(window);
