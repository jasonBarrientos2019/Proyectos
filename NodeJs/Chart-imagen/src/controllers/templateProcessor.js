const handlebars = require("handlebars");
const cheerio = require('cheerio');
const { DateTime } = require("luxon");
const ChartJsImage = require('chartjs-to-image');


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
      var input=chart
      //generate chart 

     
      const myChart = new ChartJsImage();

      myChart.setConfig({
        type: chart.type,
        data: chart.data
      });

      const b64Template = await myChart.toDataUrl();
      myChart.setFormat('png')

      
      $('.charts').append(`<div> <img src="${b64Template}" alt=""> </div>`);

      return $.html();


  }

  // ############################ chartsType ############################ 



}

module.exports = TemplateProcessor;
