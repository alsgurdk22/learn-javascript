// 2022-01-10 01.기본문법 -> js 파일 변환

// typeof 연산자
console.log(typeof 'hello world'); // 자료형 확인
// 'string'

// 템플릿 리터럴
// 백틱(``, backtick)으로 감싸는 방법

console.log(`hello world`);

// 지수표기법
// e 뒤에 나오는 숫자만큼 10의 거듭제곱
console.log(5e4); // 5 * 10000 = 50000
console.log(5e+4); // 5 * 10000 = 50000
console.log(5e-3); // 5 * (1/1000) = 0.005

// 2, 8, 16 진법 표기
// 2진법은 숫자 앞에 0b(숫자 0, 영어 b)를 붙임
console.log(0b11);
// 3

// 8진법은 숫자 앞에 0o(숫자 0, 영어 o)를 붙임
console.log(0o15);
// 13

// 16진법은 숫자 앞에 0x(숫자 0, 영어 x)를 붙임
console.log(0x1c);
// 28

// 문자열 -> 숫자로 변경
console.log(typeof parseInt('5'));
// 'number'

console.log(parseInt('3.14'));
// 3
console.log(parseFloat('3.14'));
// 3.14

// 기수법 적용하기
// 2진법
console.log(parseInt(111, 2));
// 7
// 1*4 + 1*2 + 1

// 7진법
console.log(parseInt (111, 7));
// 57
// 1*49 + 1* 7 + 1

// NaN: Not a Number 영문이지만, 숫자
console.log(typeof NaN);
// 'number'

// 거듭제곱 연산자 **
console.log(2 ** 4);
// 16
// 2의 4승

// 무한의 수
console.log(2 / 0);
console.log(Infinity - 100);
// Infinity

console.log(-2 / 0);
// -Infinity

console.log(typeof Infinity);
// 'number' 무한은 숫자형

console.log(Infinity - Infinity);
console.log(0 / 0);
// NaN

// 실수 계산 시 주의할 점
console.log(0.1 + 0.2);
// 0.30000000000000004 부동소수점 문제
// 해결방안
console.log((0.1 * 10 + 0.2 * 10) / 10);
// 0.3

// 비교 연산자 주의
console.log(NaN == NaN);
// false

// 문자 번호 확인
console.log('a'.charCodeAt());
// 97

// == 와 === 차이
console.log('1' == 1);
// true 값 만 비교
console.log('1' === 1);
// false 자료형, 값 둘다 비교
console.log(1 != '1');
// false 값 만 비교
console.log(1 !== '1');
// true 자료형, 값 둘다 비교