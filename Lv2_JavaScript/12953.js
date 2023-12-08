// 연습문제 - N개의 최소공배수 (정답률 68%)

function solution(arr) {
  let answer = 0;
  
  let index = 1;
  let go = true;
  while (go) {
    answer = arr[arr.length-1] * index;
    for(let i = 0; i < arr.length-1; i++) {
      if (answer % arr[i] !== 0) break;
      if (i === arr.length - 2) go = false;
    }
    index++;
  }
  
  return answer;
}
