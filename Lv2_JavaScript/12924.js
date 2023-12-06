// 연습문제 - 숫자의 표현 (정답률 75%)

function solution(n) {
  let answer = 0;

  for(let i = 1; i < n/2; i++) {
    let index = i+1;
    let sum = i;
    while (sum < n) {
      sum += index;
      index++;
    }
    if (sum === n) answer++; 
  }
  
  answer++;
  
  return answer;
}
