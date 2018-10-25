var countdownGenerator = function (x) {
    var startCount = x + 1;
    return function() {
      startCount -= 1;
      if(startCount > 0) {
        console.log("T-minus " + startCount + "...");
      }
      if(startCount === 0) {
        console.log("Blast Off!");
      }
      if(startCount < 0) {
        console.log("Rockets already gone, bub!");
      }
    }
};

var countdown = countdownGenerator(3);



//test
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!