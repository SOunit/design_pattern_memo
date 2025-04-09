(function () {
  type Tax = {
    rate: number;
  };

  interface ITaxCalculator {
    calcTax(tax: Tax, amount: number): number;
  }

  abstract class BaseTaxCalculator implements ITaxCalculator {
    calcTax(tax: Tax, amount: number): number {
      return amount * tax.rate;
    }
  }

  // follow OCP?
  function calcTax(
    calculator: ITaxCalculator,
    tax: Tax,
    amount: number
  ): number {
    return calculator.calcTax(tax, amount);
  }

  class GstTaxCalculator extends BaseTaxCalculator {}

  class PstTaxCalculator extends BaseTaxCalculator {}

  // from db
  const gstTax = {
    rate: 0.05,
  };
  const pstTax = {
    rate: 0.07,
  };

  const gstTaxAmount = calcTax(new GstTaxCalculator(), gstTax, 100);
  const pstTaxAmount = calcTax(new PstTaxCalculator(), pstTax, 100);

  console.log(`GST Tax Amount: ${gstTaxAmount.toFixed(2)}`); // GST Tax Amount: 5
  console.log(`PST Tax Amount: ${pstTaxAmount.toFixed(2)}`); // PST Tax Amount: 7
})();
