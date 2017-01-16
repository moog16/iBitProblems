function numrange(a, b, c) {
  var startingIndex = 0;
  var workingIndex = 0;
  var sum = 0;
  var ret = 0;
  var stopIndex = a.length - 1;

  while(startingIndex <= stopIndex) {
    sum += a[workingIndex];
    workingIndex++;
    if(sum >= b && sum <= c) {
      ret++;
    }
    if(sum > c || workingIndex > stopIndex) {
      workingIndex = ++startingIndex;
      sum = 0;
    }
  }

  return ret;
}
