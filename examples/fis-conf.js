fis.config.merge({
	deploy: {
		remote: {				
			receiver: 'http://127.0.0.1:3000/cgi-bin/release',	// 接收服务的地址
			from: '/',
			to: '/tmp/test'	// 服务器上部署的的路径
		}		
	}	
});
