const url='https://eva.ua/024-104-225/brnd-73044/pr20594-shampun-pantene-pro-v/'

let page = require('webpage').create();
//callback for console from page
page.onConsoleMessage = function (msg) {
    console.log(msg);
};

page.open(url)
//slimer.wait(1000)
.then( function (status) {
    page.viewportSize = { width:1024, height:768 };
    // var content = page.evaluate (function () {
     
    //     var selector=`.swatch-option`
    //     console.log('message from the web page');
    //     return  {content:document.querySelector(selector).textContent, selector}
    //                                          }

                               // );
    //console.log(`The value is ${JSON.stringify( content)}`);
    slimer.wait(2000)
    var val=page.evaluate(function(){
        //var evt = document.createEvent("MouseEvents")
        //evt.initMouseEvent("click", true, true, window,
        //0, 0, 0, 0, 0, false, false, false, false, 0, null)
        //slimer.wait(1000)
        let selectors=document.querySelector('.swatch-option')
        // console.log(selectors)
        //setTimeout(()=>{
        selectors.click()
        console.log('click')
        //}
        //,2000)
        
        //return selectors.dispatchEvent(evt)
    }
    
    )
    slimer.wait(5000)
    slimer.exit()
});