/* Напишите программу, которая выводит через console.log все числа от 1 до 100, 
с двумя исключениями. Для чисел, нацело делящихся на 3, 
она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’. 
Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.*/

/*for (i=1; i<=100; i+=1) {
    //console.log (i);*/


function displayNumber () {
    let i = 0;
    do {
        i += 1;
        if (i === 100) return "Buzz";
        if (i % 5 === 0 && i % 3 === 0) {
            console.log ("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log ("Buzz");
        } else if (i % 3 === 0) {
            console.log ("Fizz");
        } else {
            console.log (i);
        }
    } while (i <= 99);
}
console.log (displayNumber());
