function increment(arr, value) {
  const result = arr.map((num) => {
    return {
      ["val"]: (num.val += value)
    };
  });
  return result;
}

module.exports = increment;
