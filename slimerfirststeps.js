const url='https://eva.ua/024-104-225/brnd-73044/pr20594-shampun-pantene-pro-v/'

let page = require('webpage').create();
page.open(url, function (status) {
    
    var content = page.evaluate(function () {
        var selector=".base"
        console.log('message from the web page');
        return  {content:document.querySelector(selector).textContent, selector
                }                            });
    console.log(`The value is ${JSON.stringify( content)}`);
    slimer.exit()
});