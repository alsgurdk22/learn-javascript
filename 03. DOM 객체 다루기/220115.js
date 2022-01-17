// DOM 객체 다루기
// 문서 객체 모델(The Document Object Model, 이하 DOM) 은 HTML, XML 문서의 프로그래밍 interface 이다.

const number = prompt('참가 인원은?');
console.log(typeof number); // string 으로 나오며, 숫자 입력시 강제 형변환 필요
const realNumber = Number(number);
console.log(typeof realNumber); // number로 출력

const $input = document.querySelector('input'); // input 태그선택(첫번째 input만 선택)
const $$input = document.querySelectorAll('input'); // input 태그 전부 선택

// id 속성: 해당 id 값을 가진 태그는 유일함
document.querySelector('#아이디'); // id는 #이 선택자

// class 속성: 여러개의 태그 선택
document.querySelector('.클래스'); // class는 .이 선택자

// 태그 안에 태그 선택
document.querySelector('선택자 내부선택자 내부선택자 ...');
