// 월간 코드 챌린지 시즌2 - 괄호 회전하기 (정답률 66%)

function solution(s) {
    let answer = 0;
    let i = 0;
    
    const sArr = s.split("");

    while (i < sArr.length) {
        const first = sArr.shift();
        sArr.push(first);
        
        const checkResult = check(sArr);
        if (checkResult) answer++;
        
        i++;
    }
    
    return answer;
}

function check(arr) {
    const stack = [];
    
    arr.forEach((x, idx) => {
        if (arr[idx] === "]") {
            stack[stack.length - 1] === "[" ? stack.pop() : stack.push("]")
        } else if (arr[idx] === "}") {
            stack[stack.length - 1] === "{" ? stack.pop() : stack.push("}")
        } else if (arr[idx] === ")") {
            stack[stack.length - 1] === "(" ? stack.pop() : stack.push(")")
        } else if (arr[idx] === "[" || arr[idx] === "{" || arr[idx] === "(") {
            stack.push(arr[idx]);
        }
    });
    
    return stack.length === 0 ? true : false
}
