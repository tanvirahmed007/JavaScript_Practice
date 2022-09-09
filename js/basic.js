
// intro

document.getElementById("heading").innerHTML = "Hello World!";
document.getElementById("heading").style.color = "red";
document.getElementById("heading").style.backgroundColor = "yellow";

// write() method

// document.write("Hello World!");

// alert() method

// window.alert("Hello World! Welcome to JavaScript");
// alert("Hello World! Welcome to JavaScript");

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




// Object

const human = {
    name: "Tanvir Ahmed",
    age: 25,
    city: "Dhaka",
    country: "Bangladesh",
    education: "B.Sc in CSE",
    job: "Web Developer",
    salary: 25000,
    married: false,
};
console.log(human);
console.log(human.salary);


// Array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
console.log(numbers[3]);

numbers.push(50);
numbers.push("Tanvir");
console.log(numbers);
console.log(numbers.length);



// object

const car = {
    name: "BMW",
    model: "X5",
    color: "black",
    price: 5000000,
    engine: "V8",
    year: 2020,
    country: "Germany",
    owner: "Tanvir Ahmed",
    phone: 01700000000,
    address: "Dhaka, Bangladesh",
    married: false,
    total: function(){
        return this.name+ " " +this.model+ " " +this.color;
    }
};
console.log(car.total());
console.log(car);

delete car.owner;
console.log(car);

// nested object
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  } 
  console.log(myObj);



//   DOM find element

const show = (a,b) =>{
    return document.querySelectorAll("p.output").innerText = 10+20;
}


// form

const formFunc = () =>{
    let name = document.forms["myForm"]["name"].value;
    if (name.length < 5) {
        alert("Name must be atleast 5 characters long.");
        return false;
    }
    else if (name === " ") {
        alert("Name must be filled out");
        return false;
    }
        
     else {
        
        alert("Name is valid");
        return true;
    }

}


// navigation

document.getElementById("id3").innerHTML = document.lastChild.nodeValue;




