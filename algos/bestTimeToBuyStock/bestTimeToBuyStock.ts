
const maxProfit = (prices: number[]): number => {
  let lowestPrice = Infinity;
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < lowestPrice) {
      lowestPrice = prices[i];
    } else if(prices[i] - lowestPrice > maxProfit) {
      maxProfit = prices[i] - lowestPrice;
    }
  }

  return maxProfit;

};

export default maxProfit;