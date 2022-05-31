

// function addition(a:number, b:number){
//     return a + b;     
// }
// console.log("addition :" , addition(2,4));

// function subtraction(a:number, b:number){
//     return a - b;     
// }
// console.log("subtraction :" , subtraction(12,4));

// function multiplication(a:number, b:number){
//     return a * b;     
// }
// console.log("multiplication :" , multiplication(12,3));

// function division (a:number, b:number){
//     return a / b;     
// }
// console.log("division  :" , division (20,5));

function math(opp:string,a:number, b:number){
    if (opp == "add"){
        return a + b; // this function return addition 
    }
    else if (opp == "minus"){
        return a - b;
    }
    else if (opp == "mul"){
        return a * b;
    }
    else if (opp == "div"){
        return a / b;
    }
    else{
        console.log("Error");
    }
   
}
console.log(math("div", 4, 5));




