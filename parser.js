const puppeteer=require('puppeteer')
// "a-price-whole"

// "https://www.amazon.in/dp/B09RQKK6CZ"

async function checkPrice() {
    const priceString=await puppeteer.goto("https://www.amazon.in/dp/B09RQKK6CZ/ref=twister_B0B74LF28D?_encoding=UTF8&th=1")
                                    .wait("#span .a-offscreen")
                                    .evaluate(()=>document.getElementById("span .a-offscreen").innerText)
                                    .end()
    const priceNumber=parseFloat(priceString.replace('₹',''))
    if (priceNumber<70000) {
        console.log("It is cheap");
    } else {
        console.log("It is expensive");
    }
}
