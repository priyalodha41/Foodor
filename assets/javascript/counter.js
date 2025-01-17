$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counterValues = [];
  var duration = 2000; // Total time (in milliseconds) for all counters to complete
  var intervalTime = 50; // Time for each interval step (in milliseconds)
  var totalSteps = duration / intervalTime;

  // Store the final values of all counters
  for (let i = 0; i < countersQuantity; i++) {
    counterValues[i] = parseInt(counters[i].innerHTML);
  }

  // Function to increment counters
  var count = function (start, value, id, steps) {
    var localStart = start;
    var increment = Math.ceil(value / steps); // Calculate increment value for synchronization
    var interval = setInterval(function () {
      if (localStart < value) {
        localStart += increment;
        if (localStart > value) localStart = value; // Ensure it doesn't overshoot
        counters[id].innerHTML = localStart;
      } else {
        clearInterval(interval); // Stop the interval when the counter reaches its value
      }
    }, intervalTime);
  };

  // Start all counters with synchronized steps
  for (let j = 0; j < countersQuantity; j++) {
    count(0, counterValues[j], j, totalSteps);
  }
});
