const NEW_ARRAY = (numIndex) => {
    const array = Array.from({length: numIndex}, (_, index) => index + 1);
    return array.map(value => value % 15 === 0 ? 'FizzBuzz' : value % 5 === 0 ? 'Buzz' : value % 3 === 0 ? 'Fizz' : value);
}
console.log(NEW_ARRAY(100));