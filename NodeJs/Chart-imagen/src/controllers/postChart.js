
const {response,request}=require('express');
const Setup=require('./settings/setup');
const setup=new Setup();

const postChart = (req=request, res=response, next) => {

 let format= req.body.document.format

    

    setup.pagePool.acquire().then(async (page) => {
      if (format=="chart") {

        printChart(page, req.body).then((file) => {
              setup.pagePool.release(page);
              res.setHeader("Content-Type", "application/pdf");
              res.send(file);
            });
          }

          });
    }

    async function printChart(page, body) {

      //Se obtiene del request el nombre y variables a usar
      let chart=body.document.chart

      var build = await setup.templateProcessor.buildChart(chart);

      await page.setContent(build);
    
      return page.pdf({
        preferCSSPageSize: true,
        printBackground: true
      });

    }

module.exports=postChart;