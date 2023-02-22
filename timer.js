let numbers = [1, 4, 7];

numbers.forEach(function(element) {
  if (typeof element === 'number' && element >= 0) {
    setTimeout(function() {
      process.stdout.write(`\x07`);
    }, element * 1000);
  }
});