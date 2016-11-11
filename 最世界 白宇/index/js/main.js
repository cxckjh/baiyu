requirejs.config({
	baseUrl:"js/lib",//相对于index.html的路径
	paths:{
		'app':'../app',
		'jquery':'jquery-3.1.1',//自带.js
		'myutil':'../app/myutil'
	},
	shim:{//模块不用define开头时，需要加上shim开放出去功能
		'myutil':{
			exports:'createXHR'
		}
	}
});


	
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																					




