function longestConsecutiveSeq(a) {
  var map = {};
  var longestSeq = 1;
  for(var i=0; i<a.length; i++) {
    map[a[i]] = true;
  }

  for(var i=0; i<a.length; i++) {
    var seqLength = 0;
    var num = a[i];
    // if start of sequence
    if(!map[a[i]-1]) {
      while(map[num]) {
        seqLength++;
        num++;
      }
      if(longestSeq < seqLength) {
        longestSeq = seqLength;
      }
    }
  }
  return longestSeq;
}

var x = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSeq(x));
