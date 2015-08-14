function myDopeFunction(a, b) {
  var x = myAwesomeFunction(1, 2);
  var y = myReallyAwesomeFunction(5, 4);
  
var nums = [];

for (var i = 0; i < 10; i++) {
  (function (i) {
    nums[i] = function (j) {
        return i + j;
    };
  }(i));
}
  
  nums[0](2); // Prints 12 instead of 2!!!
  
  return a * b;
}
