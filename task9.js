function zeroesToEnd(arr) {
    let nonZeroIdx = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[nonZeroIdx] = arr[i];
        nonZeroIdx++;
      }
    }
    for (let i = nonZeroIdx; i < arr.length; i++) {
      arr[i] = 0;
    }
    return arr;
  }
  console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5])); 
  console.log(zeroesToEnd([0, 0, 2, 0, 5])); 
  console.log(zeroesToEnd([4, 4, 5]));          
  console.log(zeroesToEnd([0, 0]));      
  