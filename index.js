let request = require('request');
let cheerio = require('cheerio');

request({
  url: 'http://blog.infographics.tw/',
  method: 'GET'
}, (e, r, b) =>{
  console.log('request success');
  console.log(b);
  //e error
  //b data
  if(!e) console.log(b);
})