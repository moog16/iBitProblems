function uniqPermutations(a) {
  var allPerms = [];
  var uniqPermMap = {};

  function findPermutation(parentArr, perm) {
    if(parentArr.length === 0) {
      allPerms.push(perm);
      return;
    }

    for(var i=0; i<parentArr.length; i++) {
      var arrCopy = parentArr.slice();
      if(!perm) {
        findPermutation(arrCopy, arrCopy.splice(i, 1));
      } else {
        findPermutation(arrCopy, perm.concat(arrCopy.splice(i, 1)));
      }
    }
  }

  function uniq(perms)  {
    var uniqPerms = [];
    for(var i=0; i<perms.length; i++) {
      uniqPermMap[perms[i].toString()] = null;
    }
    for(var uniqPerm in uniqPermMap) {
      uniqPerm = '['+uniqPerm+']';
      uniqPerms.push(JSON.parse(uniqPerm));
    }
    return uniqPerms
  }

  findPermutation(a);
  return uniq(allPerms);
}

// var x = [1,1, 2];
//
// uniqPermutations(x);
