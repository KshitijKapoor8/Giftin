import axios from "axios";
import cherrio from "cheerio";

async function getHTML(productURL) {
  try {
    const { data: html } = await axios.get(
      `https://thingproxy.freeboard.io/fetch/` + productURL,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    return html;
  } catch (error) {
    console.log(error);
  }

  // const {data: html} = () => {
  //     return new Promise(function(resolve, reject){
  //         axios.get(`https://cors-anywhere.herokuapp.com/`+productURL, {
  //           headers: {
  //             'Access-Control-Allow-Origin' : '*',
  //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //           }
  //         }).then(res => {
  //           resolve(res);
  //         })
  //     })
  // }
  // console.log("HTML: " + html)
  // return html;
}

async function getAmazonPrice(html) {
<<<<<<< HEAD
  try {

  html = html.toString();
  const $ = await cherrio.load(html)
  
  const span = $('#priceblock_ourprice')
=======
  const $ = await cherrio.load(html);

  const span = $("#priceblock_ourprice");
>>>>>>> a2a729f3856fb6d58b8d2ff64061df16002cac0f
  return span.html();
  } catch (error) {}
}

async function getAmazonTitle(html) {
<<<<<<< HEAD
  try {
    html = html.toString();
    const $ = await cherrio.load(html)
    
    const span = $('#productTitle')
    return span.html();
  } catch(error) {}
  }
  
=======
  const $ = await cherrio.load(html);

  const span = $("#productTitle");
  return span.html();
}
>>>>>>> a2a729f3856fb6d58b8d2ff64061df16002cac0f

export { getHTML, getAmazonPrice, getAmazonTitle };
