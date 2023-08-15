// let age = 25; //Number

// console.log(age === 25)
// console.log(age === '25') // '25' String.
// console.log(age == '25') // true value 

let score = 60;

// if (score === 100) {
//     console.log('축하합니다 A 입니다')
// }

// else if (score === 80) {
//     console.log('축하합니다 A 입니다')
// }

// else {
//     console.log('분발하세요')
// }

// Server 데이터 값을 분류 
// 0: 바지, 1: 티셔츠, 2: 치마, 3: 청바지
// Number < String ==> byte ==> index
// 검색이 훨씬 용이합니다.
// 속도도 빠르게 올릴수가 있습니다. 

// 반팔 전체를 나는 보고 싶어. /// 상품명 (반팔) /// 반팔 /// 오타 /// 분류가 잘못될 수 있음
// category number = 1 
// category number = 2

let category = 1;

function Category(category) {
    switch (category) {
        case 0:
            console.log('바지전체입니다')
            break;

        case 1:
            console.log('S/M/L')
            break;

        case 2:
            console.log('M/L/XL')
            break;
    }
}

console.log(Category(category));