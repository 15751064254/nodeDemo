const cheerio = require('cheerio')
const $ = cheerio.load('<div class="static-item l"><span class="meta">学习人数</span><span class="meta-value js-learn-num">132406</span><em></em></div>')

console.log($('.static-item .meta-value').text());
