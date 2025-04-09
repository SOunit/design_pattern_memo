(function () {
  interface ITax {
    rate: number;
  }

  // follow OCP? follow SOLID principles?
  function calcTax(tax: ITax, amount: number): number {
    return amount * tax.rate;
  }

  // from db
  const gstTax = {
    rate: 0.05,
  };
  const pstTax = {
    rate: 0.07,
  };

  const gstTaxAmount = calcTax(gstTax, 100);
  const pstTaxAmount = calcTax(pstTax, 100);

  console.log(`GST Tax Amount: ${gstTaxAmount.toFixed(2)}`); // GST Tax Amount: 5
  console.log(`PST Tax Amount: ${pstTaxAmount.toFixed(2)}`); // PST Tax Amount: 7
})();
