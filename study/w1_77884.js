// Lv1. 월간 코드 챌린지 시즌2 - 약수의 개수와 덧셈 (정답률 83%)

function solution(left, right) {
    let answer = 0;
    
    let i = left;
    while (i <= right) {
        let count = countMeasure(i);
        if (count % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
        
        i++;
    }
    
    return answer;
}

function countMeasure(num) {
    let count = 1;
    let i = 2;
    while (i <= num ) {
        if (num % i === 0) count++;
        i++;
    }

    return count;
}
