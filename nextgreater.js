function nextgreater(a) {
  var greaterArr = [];
  for(var i=0; i<a.length; i++) {
    var currentIndex = i;
    var hasChanged = false;
    while(currentIndex < a.length) {
      currentIndex++;
      if(a[i] < a[currentIndex]) {
        hasChanged = a[currentIndex];
        break;
      }
    }
    if(hasChanged === false) {
      greaterArr.push(-1);
    } else {
      greaterArr.push(hasChanged);
    }
  }

  return greaterArr;
}
// var x = [8];
//
// console.log(nextgreater(x));
