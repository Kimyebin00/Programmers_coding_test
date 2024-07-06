// 연습문제 - 연속 부분 수열 합의 개수 (정답률 68%)

function solution(elements) {
    let answer = 0;
    let answerArr = [];
    
    const elementsLen = elements.length;
    let i = 1;
    while (i <= elementsLen) {
        let j = 0;
        
        while (j < elementsLen) {
            let sum = 0;
            let k = j;
            while (k < j+i) {
                if (k >= elementsLen) {
                    sum += elements[k-elementsLen]
                } else {
                    sum += elements[k]                    
                }
                k++;
            }
            answerArr.push(sum);
            j++;
        }
        
        i++;
    }
    
    const answerSet = new Set(answerArr);
    answer = answerSet.size;
    
    return answer;
}
