// Summer/Winter Coding(~2018) - 영어 끝말잇기 (정답률 69%)

function solution(n, words) {
  let answer = [];

  let number = 1;
  let order = 1;
  const usedWord = [words[0]];
  let currentWord = words[0];
  for (let i = 1; i < words.length; i++) {
    number++;
    if (number > n) {
      number = 1;
      order++;
    }
    if (usedWord.includes(words[i])) {
      break;
    } else {
      usedWord.push(words[i]);
    }
    if (currentWord.charAt(currentWord.length-1) === words[i].charAt(0)) {
      currentWord = words[i];
    } else {
      break;
    }
  };
  
  if (usedWord.length === words.length) {
    number = 0;
    order = 0;
  }
  answer.push(number);
  answer.push(order);

  return answer;
}
