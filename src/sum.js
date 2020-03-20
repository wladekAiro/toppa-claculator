const sum = (a, b, ...moreNumbers) => {
    const numbers = [a, b, ...moreNumbers]
        .map((n) => parseInt(n, 10))
        .filter((n) => !Number.isNaN(n));

    return numbers.reduce((total, n) => total + n, 0);
};

export default sum;

/*
  1. Add two numbers
  2. Add more than two numbers
  3. handle edge cases
*/
