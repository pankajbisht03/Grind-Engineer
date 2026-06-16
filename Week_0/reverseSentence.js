let str = "INDIA MY LOVE I";
// let reversedStr  = str.split(" ").reverse().join(" ");
// console.log(reversedStr)

let word = "";
let result="";
for(let i = str.length-1;i >=0; i--){
    if(str[i] !== " "){
        word = str[i] +  word
    }else{
        result += word + " ";
        word=""
    }
   
}
result += word;
console.log(result)