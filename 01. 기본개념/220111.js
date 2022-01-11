// ! 연산자 참 -> 거짓 거짓 -> 참
console.log('!true = '+ !true); // false
console.log('!false = ' + !false); // true

// 자료 형변환 !!
console.log('!!\'a\' = ' + !!'a');
console.log('!!false = '+ !!false);
console.log('!!\'\' = ' + !!'');
console.log('!!0 = ' + !!0);
console.log('!!NaN = ' + !!NaN);

// 퀴즈
// 숫자와 불 값에서 배운것을 활용하여 다음 연산의 결과가 true가 되게 만들어보세요.
// 연산자만 추가하거나 수정 할 수 있습니다. 정답은 여러개
// 5 + 4 * 3 === 27;
console.log(5 + 4 * 3 === 27); // false
console.log((5 + 4) * 3 === 27); // true
console.log(5 + 4 * 3 !== 27); // true
console.log(!(5 + 4 * 3 === 27)); // true

// 2.3 변수
// 퀴즈
// a와 b라는 변수에 어떠한 값이 들어 있습니다. 두 변수의 값을 서로 바꿔 보세요.
let a, b, temp;
a = 1;
b = 2;
console.log('a = ' + a + ', b = ' + b);
console.log('a, b 값 교환 실행');
temp = a;
a = b;
b = temp;
console.log('a = ' + a + ', b = ' + b);

// 2.4 조건문
// 거짓: false, '', 0, NaN, null, undefined
// 참: 그 외 나머지 보통 true