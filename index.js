//conditionals

let age = 16;

if(age >= 18) {
    console.log("you may enter")
}
else{
    console.log("you should cry kid")
}

//boolean 

let isStudent= true;

if (isStudent){
    console.log("you are a student")
}
else{
    console.log("you are not a student")
}

//nested if AD

let age = 17 ;
let hasLicense = false ;

if(age >= 16){
    console.log ("you are old enough to drive")

    if(hasLicense){
        console.log("but you do not have a liceense")
    }
   else{
    console.log("you have a license")
   } 
}

else{
    console.log("you must be 16+ to have a license")
}

//array 

let fruits = ["apple","orange","banana"];

//fruit.push ("mango");  --adds mango 
//fruit.pop();     --removes the last element 
//fruits.unshift("mango");  --- adds mango in the beginning 

console.log (fruits[0]); //apple
console.log (fruits[1]); // orange
console.log (fruits[3]); // undefined  


//searching elements 

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log ("index");      // it willl show the index number of mango ...[0]
                           // if the index number shows -1 ..that means the element is not found 

                           
//Function 

function happyBirthday(){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday Dear you");
    console.log("Happy Birthday to you");
}

happyBirthday();


