function arraySum(arr1, arr2) {
  let incrIndex = 0;

  const sum = arr1.map((item) => {
    const result = item + arr2[incrIndex];

    if (incrIndex >= arr2.length - 1) {
      incrIndex = 0;
    } else {
      incrIndex++;
    }
    return result;
  });
  return sum;
}

module.exports = arraySum;
