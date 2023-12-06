// 연습문제 - 다음 큰 숫자 (정답률 74%)

function solution(n) {
  let answer = n+1;
  
  let binaryN = n.toString(2).split('');
  binaryN = binaryN.filter(bit => bit === '1');
  
  while (true) {
      let binaryAnswer = answer.toString(2).split('');
      binaryAnswer = binaryAnswer.filter(bit => bit === '1');
      
      if (binaryN.length === binaryAnswer.length) break;
      answer++;
  }
  
  return answer;
}
