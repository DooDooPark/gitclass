
// console.log('hello javascript');

// 변수 선언과 함수 작성


// const pass = true;

// year = 3000;
// console.log(year);


// if (true) {
//     let year = 200;
//     console.log(year);
//     console.log('hello')
// }

// console.log(year);

// 강 타입이 무엇입니까?
let year = 2023;  // 숫자
const point = 2;
const today = '광복절'; // 문자.
const pass = false;

const sale = '7';

// console.log(typeof (year));
// console.log(typeof (today));
// console.log(typeof (pass));

// console.log(year + '_' + today); //2023_광복절
// console.log(typeof (point + sale)); // 250+ 7.5 = 257.5 

let stringresult = Number(point) * String(year)
let result = Number(point) * Number(sale);

console.log(result);
console.log(typeof (stringresult));


// typescript => 타입을 강제. / compile type.
// 보통의 언어는 오류를 표현해줌.
// 문자를 숫자로 바꿀필요가 있을때 (형변환)


// data type.
// Number = 1,2,3,4,5, 7.5, 8.5 // int, float, 
// String = 'hello world' 
// Boolean = true/false / 참,거짓

// Null, Undefined,Object
