function missingNumber(numArr) {
  let newArray = [];

  let minimum = Math.min(...numArr);
  let maximum = Math.max(...numArr);

  for(let i = minimum; i < maximum; i++){
    if(numArr.indexOf(i) < 0){
      newArray.push(i);
      return newArray;
    }
  }
  return false;  
}

module.exports = missingNumber
