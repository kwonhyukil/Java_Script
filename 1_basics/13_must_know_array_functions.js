/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]
console.log(iveMembers);

// push()
console.log(iveMembers.push('코드팩토리'));
console.log(iveMembers);

console.log('-----------------')

// pop() - 끝 값 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

console.log('-----------------')

// shift() - 첫 번째 값 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

console.log('------------------')

// unshift() - 첫 번째 값에 추가
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers)

console.log('-------------------')

// splice()
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// concat() - 새로운 Array 를 만들어 반환해준다.
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

console.log('-----------------')

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

console.log('--------------------')

// spread operator
let iveMember2 = [
    ...iveMembers,
];
console.log(iveMember2);

console.log('-----------------')

let iveMember4 = iveMembers;

console.log(iveMember4);
console.log(iveMember4 === iveMembers);

// console.log([
//     ...iveMembers,
// ] === iveMembers);

console.log('--------------')

// join()
console.log(iveMembers);
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

console.log('----------------------');

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

console.log('--------------------')

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a, b 를 비교했을 때
// 1) a를 b 보다 나중에 정렬하려면 ( 뒤에 두려면 ) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 ( 앞에 두려면 ) 0보다 작은 숫자를 반환
// 3) 원래 수너를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
})
console.log(numbers);

numbers.sort((a, b) => {
    return a > b ? -1 : 1;
})
console.log(numbers);

console.log('-------------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`))

console.log('--------------------')

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}))
console.log('--------------------')
console.log(iveMembers);
console.log('--------------------')

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의
// 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
