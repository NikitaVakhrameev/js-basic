/*Напишите цикл, выводящий такой треугольник:
 
 #
 ##
 ###
 ####
 #####
 ######
 #######
*/

// Способ номер 1 //
/*
function triangle () {
let i = "#";
do {
    console.log (i);
    i = i + "#";
    if (i.length === 7) return i;
}
while (i.length <= 7);
} 
console.log(triangle());*/

//Способ номер 2 //

function triangle () {
    let x = "#";
    for (let i = 0; x.length <= 7; i++) {
        console.log (x);
        x += "#";
        if(x.length === 7) return x;
    }
}
console.log(triangle());
