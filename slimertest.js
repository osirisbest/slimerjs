// console.log("Hello Slimer!");
// slimer.exit();
 var x
 var webpage = require("webpage").create()
 let url='https://eva.ua/024-104-225/brnd-73044/pr20594-shampun-pantene-pro-v/'
 webpage
 .open(url)
     .then(function(status){
//          if (status == "success") {
//              console.log("The title of the page is: "+ page.title);
//          }
//          else {
//              console.log("Sorry, the page is not loaded");
//          }
//          page.close();
//          phantom.exit();
        x=0
     })

     slimer.wait(3000)
     console.log(x)
     slimer.exit();

// .then(
    
    
//     function(){
//         webpage.viewportSize =
//         { width:1000, height:1000};
    
//     this.evaluate(
//         function(){

//       var evt = document.createEvent("MouseEvents")
//       evt.initMouseEvent("click", true, true, window,
//         0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         let selectors=document.querySelector('.swatch-option .text')
//         console.log(selectors)
//       return selectors.dispatchEvent(evt)
//       })
//       page.close();
//       phantom.wait(1000)
//       phantom.exit();
//     });
    
    //phantom.exit()