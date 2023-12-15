
const fs = require('fs');
const csv = require ('fast-csv');
//const csv = require('csv-stream, csv-parser');
//const readline = require('readline');

// initializing necessary paths, streams, data structures

const inputFile = 'DepartmentSales.csv'
const outputFile = 'DepartmentTotals.csv'

const readStream = fs.createReadStream(inputFile);
const writeStream = fs.createWriteStream(outputFile);

const departmentTotals = new Map();

// processing input file

const csvStream = csv.parseStream(readStream, { delimiter: ','});

csvStream.on('data', (row) => {

  const department = row[0];
  const sales = parseInt(row[2]);

  if (!departmentTotals.has(department)) {
    departmentTotals.set(department, 0);
  }

  const currentTotal = departmentTotals.get(department);
  departmentTotals.set(department, currentTotal + sales);

});

// writing output file

csvStream.on('close', () => {

  for (const [department, currentTotal] of departmentTotals) {
    writeStream.write(`${department}, ${currentTotal}\n`)
  }

  writeStream.close(() => {
    console.log(`Data from ${inputFile} successfully processed and saved to ${outputFile}`);
  });

});

// error handling

csvStream.on('error', (error) => {
  console.error(`${error.message}`);
});
