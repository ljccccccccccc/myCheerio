let https = require('https');
let express = require('express');
let app = express();

let indexRouter = require('./routes/index');
let myCheerio = require('./public/javascripts/myCheerio');


app.use('/',indexRouter);

let jobs = [];
for(let i = 5699029; i<5699039; i++){
    let url = 'https://www.lagou.com/jobs/'+i+'.html';
    getUrl(url);
}

function getUrl(url){
    let job ;
    https.get(url,function (res){
        let chunks = '',size = 0;
        res.on('data',function(chunk){   //监听事件 传输
            chunks = chunks + chunk;
            size += chunk.length;
        });
        res.on('end',function (){
            //todo 这里引入cheerio的代码
            job = myCheerio(chunks);
        })
    });
    return job;
}

