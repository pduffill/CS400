function* splitter(sentence){
    let split = sentence.split(" ");
    for(word of split) yield word
}

let splicer = splitter("All I know is something like a bird with her sang");
while(true){
    let next = splicer.next();
    if(!next.done){
        console.log(next.value);
    }
    else break;
}