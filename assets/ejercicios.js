function ej1(num) {
  if (num % 2 === 0) {
    return console.log(`EJ1: El número ${num} es par`);
  } else return console.log(`EJ1: El número ${num} es impar`);
}

ej1(7777);
ej1(8888);

function ej2(num1, num2) {
  if (num1 === num2) {
    return console.log(`EJ2: Los dos números son equivalentes`);
  } else if (num1 > num2) {
    return console.log(`EJ2: El número ${num1} es mayor que ${num2}`);
  } else {
    return console.log(`EJ2: El número ${num1} es menor que ${num2}`);
  }
}

ej2(7777, 8888);
ej2(8888, 7777);

function ej3(num) {
  if (num % 5 === 0) {
    return console.log(`EJ3: El número ${num} es múltiplo de 5`);
  } else return console.log(`EJ3: El número ${num} no es múltiplo de 5`);
}

ej3(80);
ej3(78);

function ej4(num) {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

ej4(15);

function ej5(palabra, num) {
  for (let i = 1; i <= num; i++) {
    console.log(palabra);
  }
}

ej5(`INSERTAR_PALABRA_ACÁ`, 10);

function ej6(...array) {
  console.log(...array);
}

let array = [4, 8, 15, 16, 23, 42];
ej6(array);

function ej7(...array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ej7(...array);

function ej8(num, ...array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
}

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
ej7(5, ...array);
