

function addition(a:number, b:number){
    return a + b;     
}
console.log("addition :" , addition(2,4));

function subtraction(a:number, b:number){
    return a - b;     
}
console.log("subtraction :" , subtraction(12,4));

function multiplication(a:number, b:number){
    return a * b;     
}
console.log("multiplication :" , multiplication(12,3));

function division (a:number, b:number){
    return a / b;     
}
console.log("division  :" , division (20,5));

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

const arr1:number[] = [1,2,3,4,5,6];
let temp = "";
for (let i = 0; i < arr1.length; i++) {
  temp += arr1[i] + " ";
}

// for (let i = 0; i < 3; i++) {
//     temp += arr1[i] + " ";
//   }
console.log(temp);

//Write a typescript program to print numbers from 1 to 10 using for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

  //Write a typescript program to print numbers from 10 to 1 using for loop
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }





