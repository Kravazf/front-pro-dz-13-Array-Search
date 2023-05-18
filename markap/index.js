// Знайти суму та кількість позитивних елементів.
values = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

nubmerOfPositiveValues = 0;
sumPositiveElement = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0) {
    nubmerOfPositiveValues++;
    sumPositiveElement += values[i];
  }
}

console.log(`Number of positive value: ${nubmerOfPositiveValues}`);
console.log(`The sum of positive elements: ${sumPositiveElement}`);

// Знайти мінімальний елемент масиву та його порядковий номер.

minElement = values[0];
indexMinElement = 0;

for (i = 0; i < values.length; i++) {
  if (minElement > values[i]) {
    minElement = values[i];
    indexMinElement = i;
  }
}

console.log(`Min elememt of array: ${minElement}`);
console.log(`The index of the minimum element of the arrey: ${indexMinElement}`);

// Знайти максимальний елемент масиву та його порядковий номер.

maxElement = values[0];
indexMaxElement = 0;

for (i = 0; i < values.length; i++) {
  if (maxElement < values[i]) {
    maxElement = values[i];
    indexMaxElement = i;
  }
}

console.log(`Max elememt of array: ${maxElement}`);
console.log(`The index of the minimum element of the arrey: ${indexMaxElement}`);

// Визначити кількість негативних елементів.

numberOfNegativeValues = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] < 0)
  numberOfNegativeValues++;
}

console.log (`Number of negativ value: ${numberOfNegativeValues}`);

// Знайти кількість непарних позитивних елементів.

nubmerOfOddPositiveValues = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0 && values[i] % 2 !== 0) {
  nubmerOfOddPositiveValues++;
  }
}

console.log (`Number of odd positive value: ${nubmerOfOddPositiveValues}`);

// Знайти кількість парних позитивних елементів.

nubmerOfEvenPositiveValues = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0 && values[i] % 2 === 0) {
    nubmerOfEvenPositiveValues++;
  }
}

console.log(`Number of even positive value: ${nubmerOfEvenPositiveValues}`);

// Знайти суму парних позитивних елементів.

sumOfEvenPositiveValues = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0 && values[i] % 2 === 0) {
    sumOfEvenPositiveValues += values[i];
  }
}

console.log(`Sum of even positive value: ${sumOfEvenPositiveValues}`);

// Знайти суму непарних позитивних елементів.

sumOfOddPositiveValues = 0;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0 && values[i] % 2 !== 0) {
    sumOfOddPositiveValues += values[i];
  }
}

console.log(`Sum of odd positive value: ${sumOfOddPositiveValues}`);

// Знайти добуток позитивних елементів.

productОfPositiveElements = 1;

for (i = 0; i < values.length; i++) {
  if (values[i] > 0) {
    productОfPositiveElements *= values[i];
  }
}

console.log(`Product of positive elements: ${productОfPositiveElements}`);

// Знайти найбільший серед елементів масиву, остальні обнулити.

maxElementArrey = values[0];

for (i = 0; i < values.length; i++) {
    if (maxElementArrey < values[i]) {
      maxElementArrey = values[i];
    }
  }

for (i = 0; i < values.length; i++) {
  if (values[i] !== maxElementArrey) {
    values[i] = 0;
  }
}

console.log(values);