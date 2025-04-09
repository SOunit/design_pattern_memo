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

  class TaxService {
    constructor(private taxCalculator: ITaxCalculator) {
      this.taxCalculator = taxCalculator;
    }
    calcTax(tax: Tax, amount: number): number {
      return this.taxCalculator.calcTax(tax, amount);
    }
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

  const gstTaxAmount = new TaxService(new GstTaxCalculator()).calcTax(
    gstTax,
    100
  );
  const pstTaxAmount = new TaxService(new PstTaxCalculator()).calcTax(
    pstTax,
    100
  );

  console.log(`GST Tax Amount: ${gstTaxAmount.toFixed(2)}`); // GST Tax Amount: 5
  console.log(`PST Tax Amount: ${pstTaxAmount.toFixed(2)}`); // PST Tax Amount: 7
})();

// this follows SOLID principles, especially the Open/Closed Principle (OCP).
