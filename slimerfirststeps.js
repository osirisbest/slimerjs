let url='https://eva.ua/024-104-225/brnd-73044/pr20594-shampun-pantene-pro-v/'

var page = require('webpage').create();
page.open(url, function (status) {
    
    var mainTitle = page.evaluate(function () {
        var selector=".base"
        console.log('message from the web page');
        return document.querySelector(selector).textContent;
    });
    console.log('The  ' + mainTitle);
    slimer.exit()
});