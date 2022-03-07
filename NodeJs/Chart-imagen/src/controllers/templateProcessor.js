const handlebars = require("handlebars");
const cheerio = require('cheerio');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');


//registers

//contents
const { getContentPDF ,getCss} = require("./Utils/getContents");



class TemplateProcessor {
  constructor() {
  }
  // ############################ Chart ############################ 

  async buildChart(chart) {
      var templateContent = await getContentPDF('charts');

    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <link rel="stylesheet" href="css/base.css">

    </head>
    <body>
        ${templateContent}
    </body>
    </html>`


      var hb = handlebars.compile(html);

      var hbResult = await hb({})
      var $ = cheerio.load(hbResult);
    //generate chart 
    let config = {
      type: chart.type,
      data: chart.data
    };

    const width = 500; //px
    const height = 500; //px
    const backgroundColour = 'white'; 

    const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, backgroundColour});
    const base64 = await chartJSNodeCanvas.renderToDataURL(config);

     $('.charts').append(`<div> <img src="${base64}" alt=""> </div>`);

    return $.html();

  }

}

module.exports = TemplateProcessor;
