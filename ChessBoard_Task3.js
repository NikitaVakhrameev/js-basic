/* Напишите программу, создающую строку, содержащую решётку 8х8, 
в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. 
В результате должна получиться шахматная доска. Когда справитесь, сделайте размер доски переменным, 
чтобы можно было создавать доски любого размера.*/

/*
# # # #  
 # # # #
# # # # 
# # # # */

/* Вопрос по функции с перезаписью переменных*/

//Топорный способ//


function createBoard (a, b) {
    let x="# ";
    let y=" #";
    let string ="";
    let string2="";
    for(let i=0; i<a/2; i++) {
      string +=y;
      string2 +=x;
    }
    for (let j=0; j<b; j++) {
      if (j % 2 !=0) {
        console.log(string);
      } else {
        console.log(string2);
      }
    } 
  } 
  console.log(createBoard(8,8));
    
  

