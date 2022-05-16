function sumNumbers(test) {
    return test
      .split(/\s+/)
      .map(Number)
      .filter(isFinite)
      .reduce((accum, n) => accum + n, 0);
  }