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

  // design pattern - model template?
  interface ITaxCalculator {
    calcTax(tax: Tax, amount: number): number;
  }

  class BaseTaxCalculator implements ITaxCalculator {
    calcTax(tax: Tax, amount: number): number {
      return amount * tax.rate;
    }
  }

  class GstTaxCalculator extends BaseTaxCalculator {}

  class PstTaxCalculator extends BaseTaxCalculator {}

  // follow OCP? follow SOLID principles?
  function calcTax(
    calculator: ITaxCalculator,
    tax: Tax,
    amount: number
  ): number {
    return calculator.calcTax(tax, amount);
  }

  // factory pattern
  // DI
  class TaxService {
    constructor(private taxCalculator: ITaxCalculator) {
      this.taxCalculator = taxCalculator;
    }

    calcTax(tax: Tax, amount: number): number {
      return this.taxCalculator.calcTax(tax, amount);
    }
  }

  // main
  const productCost = 100;
  const gstTaxAmount = new TaxService(new GstTaxCalculator()).calcTax(
    gstTax,
    productCost
  ); // calcTax(new GstTaxCalculator(), gstTax, productCost);
  const pstTaxAmount = calcTax(new PstTaxCalculator(), pstTax, productCost);

  // ui / view
  console.log(`GST Tax Amount: ${gstTaxAmount.toFixed(2)}`); // GST Tax Amount: 5
  console.log(`PST Tax Amount: ${pstTaxAmount.toFixed(2)}`); // PST Tax Amount: 7
})();
