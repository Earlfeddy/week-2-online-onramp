function numSwap(number) {
  const numStr = number.toString();
  const numArr = numStr.split("");

  const chunks = [];

  for (let i = 0; i < numArr.length; i += 2) {
    const newChunk = numArr.slice(i, i + 2);
    chunks.push(newChunk);
  }
  const swappedArr = chunks.map((chunk) => chunk.reverse());

  const joinedArray = swappedArr.flat();
  const str = joinedArray.join("");

  return Number(str);
}

module.exports = numSwap;
