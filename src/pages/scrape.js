import axios from 'axios';
import cherrio from 'cheerio';

async function getHTML(productURL) {
    try {
      const { data: html } = await axios.get(`http://www.whateverorigin.org/get?url=`+productURL, {
        
      })
      console.log(productURL)
      return html;
    } catch (error) {
      console.log(error);
    }

  }

async function getAmazonPrice(html) {
  const $ = cherrio.load(html)
  
  const span = $('#priceblock_ourprice')
  return span.html();
}

async function getAmazonTitle(html) {
    const $ = cherrio.load(html)
    
    const span = $('#productTitle')
    return span.html();
  }
  

export { getHTML, getAmazonPrice, getAmazonTitle };