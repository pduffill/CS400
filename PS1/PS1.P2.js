let evaluate = input => {
    let operation = getOperation(input.charAt(1));
    return operation(parseInt(input.charAt(0)), parseInt(input.charAt(2)));
}

const getOperation = operator => {
     switch (operator) { 
        case '+': return (left, right) => left + right; 
        case '-': return (left, right) => left - right;
        case '*': return (left, right) => left * right;
        case '/': return (left, right) => left / right;
        case '%': return (left, right) => left % right;
    } 
} 

