function* fibs1 () {
    let [val1, val2, result] = [0, 1, 0];
    while(true){
        result = val1 + val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}

function* fibsEven (){
    for (fib of fibs1()){
        if (fib %2 ==0) yield fib;
    }
}

let count = 6;
let fibev = fibsEven();
while(count --> 0){
    console.log(fibev.next().value);
}