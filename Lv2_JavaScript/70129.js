// 월간 코드 챌린지 시즌1 - 이진 변환 반복하기 (정답률 76%)

function solution(s) {
  const answer = [];
  let arrayS = s.split('');
  
  let changeCount = 0;
  let removeCount = 0;
  while (true) {
    arrayS.forEach(element => {
      if (element === '0') removeCount++
    });
    arrayS = arrayS.filter(bit => bit === '1');
    
    let intS = parseInt(arrayS.length);
    intS = intS.toString(2);
        
    arrayS = intS.split('');
    changeCount++;
        
    if (arrayS.length === 1) break;
  }
  
  answer.push(changeCount);
  answer.push(removeCount);
  
  return answer;
}
