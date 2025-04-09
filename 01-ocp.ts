(function () {
  type Tax = {
    rate: number;
  };

  // from db
  const gstTax = {
    rate: 0.05,
  };
  const pstTax = {
    rate: 0.07,
  };

  // follow OCP? follow SOLID principles?
  function calcTax(tax: Tax, amount: number): number {
    return amount * tax.rate;
  }

  // main
  const productCost = 100;
  const gstTaxAmount = calcTax(gstTax, productCost);
  const pstTaxAmount = calcTax(pstTax, productCost);

  // ui / view
  console.log(`GST Tax Amount: ${gstTaxAmount.toFixed(2)}`); // GST Tax Amount: 5
  console.log(`PST Tax Amount: ${pstTaxAmount.toFixed(2)}`); // PST Tax Amount: 7
})();
