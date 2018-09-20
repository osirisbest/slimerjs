const url =
  'https://eva.ua/024-104-225/brnd-73044/pr20594-shampun-pantene-pro-v/'

let page = require('webpage').create()

page.onConsoleMessage = function (msg) {
  console.log(msg)
}

page.open(url).then(function (status) {
  page.viewportSize = { width: 1024, height: 768 }
  var content = page.evaluate(function () {
    var selector = `.swatch-option`
    console.log('message from the web page')
    return { content: document.querySelector(selector).textContent, selector }
  })
  console.log(`The value is ${JSON.stringify(content)}`)
  // CLICK
  slimer.wait(2000)
  var val = page.evaluate(function () {
    let selectors = document.querySelector('.swatch-option')
    selectors.click()
    console.log('click')
  })
  slimer.wait(5000)
  slimer.exit()
})
