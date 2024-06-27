export const percentageDifference = (currensyOne, currencyTwo) => {
  const difference = currensyOne - currencyTwo;
  const percentageDifference = (difference / currencyTwo) * 100;

  return percentageDifference.toFixed(2);
};
