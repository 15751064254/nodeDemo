var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
  'content': '一起期待下一期课程',
  'cid': 12974
});

var options = {
  hostname: 'www.imooc.com',
  port: 80,
  path: '/course/docomment',
  method: 'POST',
  headers:{
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.6,en;q=0.4',
    'Connection': 'keep-alive',
    'Content-Length': postData.length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'imooc_uuid=cac2670b-aec5-4cef-aaad-b8da91c9f9d2; imooc_isnew_ct=1488290543; PHPSESSID=0sdgh5j0j6baulrpghtshguib2; loginstate=1; apsid=BiMzRhM2QxN2VhZjE3NzgyNDk5Njc2Zjc1NzQyODYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTAyMTM3NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMDMxMzUzNjMyQHFxLmNvbQAAAAAAAAAAAAAAAAAAADkyOTVmNTk1MTg5NjI3NWI0ZWI0ZmM4ZDBkZDYyY2NjhHHgWIRx4Fg%3DYz; last_login_username=1031353632%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1489591647,1489836415,1490964270,1490974823; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1491192782; imooc_isnew=2; cvde=58de7865818d3-128',
    'Host': 'www.imooc.com',
    'Origin': 'http//www.imooc.com',
    'Referer': 'http//www.imooc.com/video/12974',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

var req = http.request(options, function(res){
  console.log('Status: ' + res.statusCode);
  console.log('headers: ' + JSON.stringify(res.headers));

  res.on('data', function(chunk){
    console.log(Buffer.isBuffer(chunk));
    console.log(typeof chunk);
    //console.log(chunk.toString('utf8'));
    //console.log(chunk.toString('base64'));
  });

  res.on('end', function(){
    console.log('完毕!');
  });
});

req.on('error', function(e){
  console.log('Error: ', e.message)
});

req.write(postData);
req.end();
