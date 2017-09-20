var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  'token' : 'f1826d0498c8a595a1d9221048e4e8e2',
  'roomid' : '39105',
  'type' : '1',
  'content' : '666',
  'hostid' : '3984348',
  '__plat' : 'pc_web',
  '_' : new Date().getTime()
});

var options = {
  hostname: 'www.panda.tv',
  port: 80,
  path: '/ajax_send_group_msg',
  method: 'POST',
  headers:{
    'Accept' : 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding' : 'gzip, deflate, sdch',
    'Accept-Language' : 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
    'Connection' : 'keep-alive',
    'Cookie' : '__guid=96554777.2844440947713706000.1488287836544.2012; I=r%3D32954892; R=r%3D32954892%26u%3DCnaqnGi32954892%26n%3D_____Wnl%26le%3DZGNmZGZ1ZmLmZvH0ZUSkYzAioD%3D%3D%26m%3DZGZmAwL0AQNmAwN%3D%26im%3DnUE0pPHmDFHlEvHlEzx4YaOxnJ0hM3ZyZxMwMTVkZJAvAJZjMJH1Lwp0L2HmMGR1AmExLzD5MQt2Al5dpTIa; M=t%3D1490883961%26v%3D1.0%26mt%3D1490883961%26s%3D8b449dfb20820c89fccc8514467f43b0; aliyungf_tc=AQAAAKels0SaJQIAoKnLAVgSxduu9c/W; monitor_count=64; Hm_lvt_204071a8b1d0b2a04c782c44b88eb996=1490974831,1491118233,1491125663,1491188086; Hm_lpvt_204071a8b1d0b2a04c782c44b88eb996=1491188713; smid=756547f8-0c5b-4401-8eff-b1c8810f7a6d',
    'Host' : 'www.panda.tv',
    'Referer' : 'http://www.panda.tv/39105',
    'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'X-Requested-With' : 'XMLHttpRequest'
  }
}

var req = http.request(options, function(res){
  console.log('Status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function(chunk){
    console.log(chunk.toString());
    //console.log(Buffer.isBuffer(chunk));
    //console.log(typeof chunk);
  });

  res.on('end', function(){
    console.log('完毕!');
  });
});

req.on('error', function(e){
  console.log('Error: ', e.message)
});

req.write(postData);
console.log(postData);
req.end();
