const xlsxFile = require('read-excel-file/node');
 
xlsxFile('1884.xls').then((rows) => {
 console.log(rows);
 console.table(rows);
})