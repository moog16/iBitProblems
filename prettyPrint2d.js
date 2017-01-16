function prettyPrint2d(x) {
  var len = x*2 - 1;
  var arr = [];
  for(var i=0; i<x; i++) {
    var inner = [];
    for(var j=x; j>0; j--) {
      if(j<=(i+1)) {
        inner.push(i+1);
      } else {
        inner.push(j);
      }
    }
    for(var a=1; a<(x); a++) {
      inner.push(inner[x-1-a]);
    }
    arr.push(inner);
    inner = [];
  }

  var otherArr = [];
  for(var i=0; i<arr.length-1; i++) {
    otherArr[i] = arr[arr.length-1-i].slice();
  }
  return otherArr.concat(arr);
}
