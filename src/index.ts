

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

//E1 Write a typescript program to print numbers from 1 to 10 using for loop
for (let i:number = 1; i <= 10; i++) {
    console.log(i);
  }

//E2 Write a typescript program to print numbers from 10 to 1 using for loop
  for (let i:number = 10; i >= 1; i--) {
    console.log(i);
  }

// E3 Write a typescript program to print Even numbers in given array[13,23,12,45,22,48,66,100]
  const arr:number[]= [13,23,12,45,22,48,66,100];

  for (let i:number = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 ){
        console.log(arr[i]);
    }   
  }

// E4 Write a program to delete all occurrence of element in given array [23,56,4,78,5,63,45,210,56];
const delArr:number[] = [23,56,4,78,5,63,45,210,56];

for( let i:number = 0; i < delArr.length; i++){ 
    delArr.splice(0, delArr.length);
    console.log(delArr);
}

// E5 Write a JS program to print a pattern using for loop

let str:string = "";
for (let i:number = 1; i <= 8; i++) {
    for (let j:number = 1; j <= i; j++) {        
        str += "*";
      }
    str += "\n";
}
console.log(str)

let str1:string = "";
for (let i:number = 1; i <= 8; i++) {
    for (let j:number = 1; j <= i; j++) {        
        str1 += j ;
      }
    str1 += "\n";
}
console.log(str1)



//E 6 Write a typescript program to find the largest number in an array [2, 45, 3, 67, 34, 567, 34, 345, 123]

let largeNumber:number[] = [2, 45, 3, 67, 34, 567, 34, 345, 123];
let max:number = 0; 


for (let i:number = 1; i <= largeNumber.length; i++) {
  if (largeNumber[i] > max){
    max=largeNumber[i];
    }  
}
console.log(max);


//E-7 While loop Example : priont 1 to 10 with while loop

let i: number = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

let str2:string = "";
for (let i:number = 1; i <= 8; i++) {
    for (let j:number = 0; j < 8 - i; j++) {
      str2 += " ";
    }
    // for (let k:number = 0; k < i; k++) {  
    //   str2 += "*";         
    // }
    for (let k:number = 0; k < i; k++) {
      str2 += "*";
    }
    str1 += "\n";
}
console.log(str2);

let str4:string = "";
for (let i:number = 1; i <= 8; i++) {
  for (let j:number = 0; j < 8 - i; j++) {
    str4 += " ";
  }
  for (let k:number = 0; k < i; k++) {
    str4 += "*";
  }
  str4 += "\n";
}
console.log(str4);