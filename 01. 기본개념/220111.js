// ! 연산자 참 -> 거짓 거짓 -> 참
console.log('!true = ' + !true); // false
console.log('!false = ' + !false); // true

// 자료 형변환 !!
console.log('!!\'a\' = ' + !!'a');
console.log('!!false = ' + !!false);
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

// 학점 계산 if문
const score = 90;
if (score >= 90) {
  console.log('A');
} else if (score < 90 && score >= 80) {
  console.log('B');
} else if (score < 80 && score >= 70) {
  console.log('C');
} else if (score < 70 && score >= 60) {
  console.log('D');
} else {
  console.log('F');
}
// 위 코드 줄이기
// 조건문이 위에서 아래로 차례대로 실행된다는 특성을 이용
const score2 = 70;
if (score2 >= 90) {
  console.log('A');
} else if (score2 >= 80) {
  console.log('B');
} else if (score2 >= 70) {
  console.log('C');
} else if (score2 >= 60) {
  console.log('D');
} else {
  console.log('F');
}
// if 문 사용시 중첩 if 사용은 피하는 것이 좋다.
// 코드 가독성에 떨어지므로 최대한 if-else 문으로 변환이 필요함.

// if 문과 switch 문 비교
let fruit = 'apple';
if (fruit === 'apple') {
  console.log('apple!!!');
} else if (fruit === 'pear') {
  console.log('pear!!!');
} else if (fruit === 'grape') {
  console.log('grape!!!');
} else {
  console.log('nothing~');
}

switch (fruit) {
  default:
    console.log('nothing~');
    break;
  case 'apple':
    console.log('apple!!!');
    break;
  case 'pear':
    console.log('pear!!!');
    break;
  case 'grape':
    console.log('grape!!!');
    break;
}

// !!삼항연산자!! 최근 많이 쓰는 연산자! 매우 중요하며, '조건부 연산자' 라고도 부름
// 조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식
console.log(5 > 0 ? 'true' : 'false');
// 조건부 연산은 조건에 따라 달라지는 값을 변수에 대입할 때 사용합니다.
let val1 = 5 < 0 ? 'true' : 'false';
console.log(val1);

// if 문과 삼항연산자 비교
// 삼항연산자가 월등히 짧음
let condition = true;
let val2 = condition ? 'true!' : 'false!';
console.log(val2);

if (condition) {
  val2 = 'true!';
} else {
  val2 = 'false!';
}
console.log(val2);

// 조건부 연산 중첩사용
let condition1 = false;
let condition2 = true;
let val3 = condition1 ? 'condi1 true!' : condition2 ? 'condi2 true!' : 'all false!';
console.log(val3);
// 위 코드 가독성 높히는 방법
val3 = condition1 ? 'condi1 true!' : (condition2 ? 'condi2 true!' : 'all false!');
console.log(val3);
val3 = condition1
  ? 'condi1 true!'
    : condition2
    ? 'condi2 true!'
  : 'all false!';
console.log(val3);

// 2.4 퀴즈
// if 문을 switch 문과 조건부 연산자로 바꿔보세요
let cond = true;
let val0 = '';
if (cond) {
  val0 = 'true!!';
} else {
  val0 = 'false!!';
}
console.log(val0);

// switch 문
switch (cond) {
  default:
    val0 = 'false !!!';
    break;
  case true:
    val0 = 'true !!!';
    break;
}
console.log(val0);

// 조건부 연산자
val0 = cond ? 'true~' : 'false~';
console.log(val0);
