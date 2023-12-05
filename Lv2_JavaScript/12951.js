// 연습문제 - JadenCase 문자열 만들기 (정답률 78%)

function solution(s) {
  let answer = '';
  
  const words = s.split(' ');
  const jadenCaseWords = words.map(word => {
    const upperPart = word.charAt(0);
    const lowerPart = word.substr(1);
    
    return upperPart.toUpperCase() + lowerPart.toLowerCase();
  });
  
  answer = jadenCaseWords.join(' ');
  
  return answer;
}
