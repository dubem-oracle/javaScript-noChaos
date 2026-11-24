let text = prompt("Enter a string: ");
let reversed = "";

for (let letter = text.length -1; letter >= 0; letter--){
reversed += text;
}

if (text === reversed){
console.log("This is a Palindrome.);
}
    else{
    console.log("This is not a Palindrome.");
    }

    
    

