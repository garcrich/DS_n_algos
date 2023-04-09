function binarySearch(arr, target) { 
  let targetIdx = -1;

  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) {
      targetIdx = mid;
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return targetIdx;
}

export default binarySearch;