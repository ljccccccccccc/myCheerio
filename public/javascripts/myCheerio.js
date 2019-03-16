let cheerio = require('cheerio');

function myCheerio (chunks) {
    let $ = cheerio.load(chunks);
    let job = {};
    $("div.position-content").each(function (){
        job.name = unescape($(this).find(".name").html().replace(/&#x/g,'%u').replace(/;/g,''));//职位
        job.salary = $(this).find('.salary').html();//薪酬
        job.company = unescape($(this).find('.company').html().replace(/&#x/g,'%u').replace(/;/g,''));//公司
        job.type = unescape($(this).find('.labels').html().replace(/&#x/g,'%u').replace(/;/g,''));//分类
    });
    return job;
}

module.exports = myCheerio;
