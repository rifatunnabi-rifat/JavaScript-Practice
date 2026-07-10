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