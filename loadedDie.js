function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var index = 0;
  return function() {
    var output = list[index];
    index += 1;
    return output;
  }
}

var rollLoadedDie = makeLoadedDie();


console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
