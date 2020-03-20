const sum = (a, b, ...moreNumbers) => [a, b, ...moreNumbers].map((n) => parseInt(n, 10))
    .reduce((total, n) => total + n, 0);

export default sum;

/*
  1. Add two numbers
  2. Add more than two numbers
  3. handle edge cases
*/
