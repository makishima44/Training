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

//3)⦁	Реализуйте функцию fib(), возвращающую n-ное число Фибоначчи.

function fib1(number) {
  if (number <= 1) {
    return number;
  }

  let prevPrev = 0;
  let prev = 1;
  let current;

  for (let i = 2; i <= number; i++) {
    current = prev + prevPrev;
    prevPrev = prev;
    prev = current;
  }

  return current;
}

//4)⦁	Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.

function isSorted(numArr) {
  let sortArr = numArr.slice().sort((a, b) => a - b);
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] !== sortArr[i]) {
      return false;
    }
  }
  return true;
}

