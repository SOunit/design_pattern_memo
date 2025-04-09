(function () {
  // DDD like approach
  class Tax {
    rate: number;

    constructor(rate: number) {
      this.rate = rate;
    }

    calTax(amount: number): string {
      return (amount * this.rate).toFixed(2);
    }
  }

  const gst = new Tax(0.05);

  // // main
  // data comes from db
  const productCost = 100; // 200, 300, 180, anything

  // result data

  // ui / view
  console.log(`GST Tax Amount: ${gst.calTax(productCost)}`); // GST Tax Amount: 5
})();
