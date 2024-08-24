// Adds a sum method to all arrays
Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};

// Adds a clearDuplicates method to all arrays
Array.prototype.clearDuplicates = function () {
  return [...new Set(this)];
};

// Optionally, add more functions as needed
