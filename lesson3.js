//Простые задания

//1)Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

//2)Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}
