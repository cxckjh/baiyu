/**
 * Created by Administrator on 2016/11/7.
 */
//定义一个模块
	define({
	    baseUrl : 'http://localhost',
	    port: 7900,
	    getBaseURL :function () {
	        return this.baseUrl + ":" + this.port;
	    }
	});