// console.log("привет")
// let foo = 0;
// switch(foo) {
//     case -1:
//         console.log('negative 1');
//         break;
//     case 0:
//         console.log(0);
//         break;
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log('default');  
// }


// Task2
console.log(typeof 9); // "number"
console.log(typeof NaN); // "number"
console.log(typeof Infinity); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof 'foo'); // "String"
console.log(typeof true); // "boolean"
console.log(typeof {name: 'Sergey'}); // "object"
console.log(typeof null); // "object"
console.log(typeof undefined); // "underfined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof alert); // "function"

// Task3

// let name = prompt('Как тебя зовут?', '');
// if (name) {
//     alert(`Привет, ${name}`);
//     console.log(`Привет, ${name}`);
// }
// else {
//     alert('Ошибка, не тот тип данных');
//     console.log('Ошибка, не тот тип данных');
// }

// Task4
// let name = prompt('Как тебя зовут?', '');
// let message = (`${name}`) ? 'Привет Sergey' :
// ('') ? 'Ошибка, не тот тип данных':
// 'Ошибка, не тот тип данных';
// alert( message );

// Task5
switch(fDayOff) {
    case "Weekday":
        console.log('Понедельник');
        break;
    case "Weekday":
        console.log('Вторник');
        break; 
    case "Weekday":
        console.log('Среда');
        break;
    case "Weekday":
        console.log('Четверг');
        break;
    case "Weekday":
        console.log('Пятница');
        break;
    case "DayOff":
        console.log('Суббота');
        break;
    case "DayOff":
        console.log('Воскресенье');
        break;
    default:
        console.log("По моему у нас нет такого дня недели")   
}


