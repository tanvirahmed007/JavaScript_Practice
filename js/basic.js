
// intro

document.getElementById("heading").innerHTML = "Hello World!";
document.getElementById("heading").style.color = "red";
document.getElementById("heading").style.backgroundColor = "yellow";

// write() method

document.write("Hello World!");

// alert() method

// window.alert("Hello World! Welcome to JavaScript");
alert("Hello World! Welcome to JavaScript");

// console.log() method

console.log("Hello World! Welcome to JavaScript");

// function call

// function sum(){
//     var a = 10;
//     var b = 20;
//     var c = a+b;
//     console.log("the sum of a & b = ", c);
// }

// arrow function
const sum = () =>{
    var a = 80;
    var b = 20;
    var c = a+b;
    console.log("the sum of a & b = ", c);
};


const call = () =>{
    document.getElementById("title").innerHTML = "Tanvir Ahmed";
    document.getElementById("title").style.color = "white";
    document.getElementById("title").style.backgroundColor = "black";
}

const remove = () =>{
    document.getElementById("title").style.display = "none";
}

