var taxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
var totalSales = [];
var totalTax = [];
var counter = 0;
var resultsArr = {};
var taxTotal = 0;



function calculateSalesTax(sales, taxRates) {
  // Implement your code here
  var salesTotal = 0;
  var resultsObj = {};
  var taxTotal = 0;

  for(var i = 0; i < sales.length; i++){

    resultsObj[sales[i]["name"]] = {
      totalSales: 0,
      totalTaxes: 0
    };

  }
  for(var i = 0; i < sales.length; i++){
    for(var j = 0; j < sales[i].sales.length; j++) {
      salesTotal += sales[i].sales[j];
      taxTotal = salesTotal * taxRates[companySalesData[i].province]
    }

    resultsObj[sales[i]["name"]]["totalSales"] += salesTotal;
    resultsObj[sales[i]["name"]]["totalTaxes"] += taxTotal;

    salesTotal = 0;
    taxTotal = 0;
  }
  return resultsObj;
}

var results = calculateSalesTax(companySalesData, taxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/