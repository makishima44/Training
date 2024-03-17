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
