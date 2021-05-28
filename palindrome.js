
const button = document.getElementById("BTN");
button.addEventListener("click",function (){
    var reg = /[\W_]/g;//regular expressions in Js
    let text = document.getElementById("name").value;
    let pali = document.getElementById("pali");
    smallString= text.toLowerCase().replace(reg,"");//returns as lowercase
var reverse = smallString.split("").reverse().join("");
if(reverse===smallString) {
    pali.textContent = `${smallString} is a palindrome`
}else{
    pali.textContent = `${smallString} is  not a palindrome `
}
} );