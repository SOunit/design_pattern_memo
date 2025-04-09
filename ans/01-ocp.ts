(function () {
  // follow OCP?
  function calcTax(tax, amount) {
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
  const pstTaxAmount = calcTax(gstTax, 100);
})();
