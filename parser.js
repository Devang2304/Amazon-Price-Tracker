const puppeteer = require('puppeteer')

async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto('https://www.amazon.in/dp/B09RQKK6CZ')
   var element = await page.waitForSelector("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole")
   var text = await page.evaluate(element => element.textContent, element)
   const priceNumber=parseFloat(text.replace(',',''))
   if (priceNumber<70000) {
    console.log("It is cheap");
} else {
    console.log("It is expensive");
}
   browser.close()
}
scrape()
