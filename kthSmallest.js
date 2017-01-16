
function kthSmallest(x, k) {
  var arr = x.slice();
  var kthArr = [];

  while(kthArr.length < k) {
    var removeIndex = 0;
    var smallestNum = arr[removeIndex];
    for(var i=0; i<arr.length; i++) {
      if(smallestNum > arr[i]) {
        smallestNum = arr[i];
        removeIndex = i;
      }
    }

    kthArr.push(smallestNum);
    arr.splice(removeIndex, 1);
  }

  return kthArr[kthArr.length - 1];
}
