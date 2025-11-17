// bar = 3; // '전역 객체'의 속성이 된다 (window)

// Function based -> Python과 동일

// function test(a) {
//   var foo = 10 // 지역
//   console.log(foo)
// }

// test(20)

// if (foo > 1) { // True
//   var foo = 10
// }

// console.log(foo)

console.log(foo);
test();

function test() {
  console.log("Hello");
}

var foo = 5;
var bar = 3;

// 위 코드를 Hoisting 적용하여 해석
var foo;
var bar;

function test() {
  console.log("Hello");
}

console.log(foo);
test();


// ---------------------------------------------

var foo = 5;
var bar = 3;

var foo = 3;
let pos = 30;
const kin = 50;

if (foo > 1) {
  var foo = 5; // 재선언 가능
  let pos = 50;
  // const kin = 50;
  console.log(foo, pos, kin); // 5
  // let pos = 50; // 같은 스코프 내에서 재선언 할 수 없어요
}

console.log(foo, pos, kin); // 5

// ---------------------------------------------
// ASI ( 자동으로 세미콜론 )
foo = 5
bar = 30;

console.log(foo, bar);

// ---------------------------------------------

function test() {
  return {
    'sum': 'test'
  };

  // return // ASI 이 ; 붙혀서 에러 발생
  // {
  //   'sum' : 'test'
  // }
}

test()