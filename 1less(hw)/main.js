//1
//Создать переменную   a,  дать ей произвольное число и вывести её в консоли.
// let a = 27;
// console.log(a);

//2
// У вас есть let test = 'Hello World ', выведите в консоли тип данных переменной test
let test = 'Hello world!';
console.log(test);

//3
//Создать переменную   a  который равен 12 потом, дайте переменной  a  новое произвольное число  и вывести его тип  в консоли.
let a = 12;
a = 98;
console.log(a);

//4
//Создать переменную   n,  дать ей произвольное число и вывести её в alert.
// let n = 15;
// alert(n);

//5
//У вас есть let str = 'Hello World ', поменяйте значение на число выведите в консоли тип данных переменной str
// let str = 'Hello world';
// str = 6;
// console.log(str);

//6
//Преобразуйте в другой тип данных : Вам дано число 123 преобразуйте его в строку.
let str = '123';
console.log(str);

//7
//Преобразуйте в другой тип данных : Вам дано булевое значение true преобразуйте его в число используя оператор( не используя функцию Number)
let c = true;
c= 13;
console.log(c);

let i = true;
console.log(+true);

//8
// Преобразуйте в другой тип данных : Вам дан null и undefined преобразуйте их в числа.
// let d = null; (?)
console.log(Number(null));

let v = null;
console.log(+null);

let f = undefined;
console.log(Number(undefined));

//9
//Преобразуйте в другой тип данных :  преобразуйте все возможные булевые значение в числа.
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));
console.log(Boolean(0.010));
console.log(Boolean(''));
console.log(Boolean('Moon'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));

console.log(!1);
console.log(!!2);