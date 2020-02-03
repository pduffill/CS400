let func = (str, func2) => func2(str);

let res1 = func('supercalifragilisticexpialidocious',
            (str=>{
                let arr = str.replace(/c/g,'cC').split('c');
                arr = arr.map(function(x){return x.toLowerCase()})
                return arr
            }))
console.log(res1);
 
let res2 = func('supercalifragilisticexpialidocious',
            str => {
                let numA = str.split('a').length-1;
                let replaced = str.replace(/a/g,'A');
                let len = str.length;
                return {
                        originalString: str,
                        modifiedString: replaced,
                        numberReplaced: numA,
                        length: len
                       };
            }
            )
console.log(res2);