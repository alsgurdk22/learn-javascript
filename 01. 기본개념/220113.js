// 2.5 반복문
// 퀴즈
// 1~10까지 출력하는 코드 작성(while, for 둘다)
// while
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
// for
for (i = 1;i < 11;i++){
  console.log(i);
}
// 무한반복문
// while (true) {}
// for (;;) {}

// 퀴즈
// 구구단 출력, 결과에 짝수가 하나도 나오지 않게 하기. continue 문 사용
for (i = 1;i < 10;i++) {
  if (i % 2 === 0) continue;
  for (let j = 1;j < 10;j++) {
    if (j % 2 === 0) continue;
    console.log(`${i} * ${j} = ${i*j}`);
  }
}

// 2.6.1 배열
// 퀴즈
// arr 라는 배열이 있을 때, 배열의 마지막에서 세번째 요쇼를 찾아보세요.
const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr[arr.length-3]);

// 배열요소 추가, 수정도 가능 -> arr[수정할 배열 요소 숫자]
arr[arr.length] = 'g';
console.log(arr);
// 맨 앞으로 값 추가
arr.unshift('z');
console.log(arr);
// 맨 뒤로 값 추가
arr.push('h');
console.log(arr);
// 배열요소 제거
arr.splice(0,1);
console.log(arr);

console.log(arr.includes('b'));
console.log(arr.includes('z'));

console.log(arr.indexOf('c'));
console.log(arr.lastIndexOf('d'));
console.log(arr.indexOf('z'));

// 퀴즈
// 다음 배열에서 '라'를 모두 제거. indexOf와 splice 를 사용하세요.
const arr1 = ['가', '라', '다', '라', '마', '라'];
let del_arr = arr1.indexOf('라');
while (del_arr > -1) {
  arr1.splice(del_arr,1);
  del_arr = arr1.indexOf('라');
}
console.log(arr1);

// 2.6.2 함수
function a() {} // 함수 선언문
const b = function () {}; // 함수 표현식
const c = () => {}; // arrow function

const d = () => {
  return 10;
};
console.log(d);
console.log(d());

function e(w, x, y, z) {
  console.log(w, x, y, z);
  console.log(arguments);
}
e('hello', 'world', 'js'); // argument < parameter
e('hello', 'world', 'js', 'hello', 'world', 'js'); // argument > parameter

// 퀴즈
// 매개변수 x, y, z 받아 곱한 값을 반환하는 multiply 함수를 만들어보세요. 단, 화살표 함수로 만들 것
const multiply = (x, y, z) => {
  return x * y * z;
};
console.log(multiply(5, 10, 100));

// 2.6.3 객체 리터럴
const minhyuk = {
  name: '정민혁',
  year: 1986,
  month: 10,
  date: 18,
  gender: 'M',
};
console.log(minhyuk.name);
console.log(minhyuk['year']);

const name = 'date';
console.log(minhyuk['name']);
console.log(minhyuk[name]);
console.log(minhyuk.hello);

delete minhyuk.gender;
console.log(minhyuk);

// 배열과 함수가 객체인 이유
// 배열, 함수 둘다 객체의 성질을 사용할 수 있음.
// 객체의 속성 값으로 함수가 들어가면 이 속성을 메서드(method) 라고 함
const debug = {
  log: function(val) {
    console.log(val);
  },
};
debug.log('hello js');

// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성.
// 같은 객체인지 비교하려면 기존 객체를 변수에 저장해 두어야 함
console.log({} === {});
const aa = { name: 'minhyuk' };
const array1 = [1, 2, aa];
console.log(aa === array1[2]);

// 참조. 변수가 아래 처럼 같은 객체를 저장하고 있다면, 객체의 속성 값을 바꾸면 모두 바뀌는 것처럼 보임.
const bb = { name: 'hyuk' };
const cc = bb;
console.log(cc.name);
bb.name = 'min';
console.log(cc.name);

// 퀴즈
// 객체 안에 객체가 있을 때, '정' 값에 접근하는 방법은?
const minhyuk1 = {
  name: {
    first: '민혁',
    last: '정',
  },
  gender: 'm',
};
console.log(minhyuk1.name.last);
console.log(minhyuk1['name']['last']);
