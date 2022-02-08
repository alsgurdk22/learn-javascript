const numbers = [];
for (let n = 1; n <= 9; n += 1) { // 1 ~ 9 까지 1씩 증가되는 for 문
  numbers.push(n); // numbers 배열에 n 을 삽입
}
console.log(numbers);

const numbers1 = Array(9).fill().map((v, i) => i + 1);
console.log(numbers1);

const array = [1, 3, 5, 7];
const newArray = array.map((number, index) => {
  console.log(number, index);
  return number + 1;
});
console.log(array);
console.log(newArray);

const array1 = [1, 3, 5, 7];
array1.forEach((number, index) => {
  console.log(number, index);
})
// forEach -> for 변경
const array2 = [1, 3, 5, 7];
for (let i = 0; i < array2.length; i++) {
  console.log(array2[i], i);
}
