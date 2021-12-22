//..... To Print Hello World
console.log("Hello World") //with console.log
//alert("Hello World") //with alert
document.write("Hello World")
//to Add Two Numbers
var num1 =5;
var num2 =7;
console.log(num1+num2);
// to Find the Square Root (karekok)
var num3 =9; var num4 =16;
console.log(Math.sqrt(num3))
console.log(Math.sqrt(num4))
//to Calculate the Area of a Triangle
   //area =( base*height)/2 ;
 const base = 8;
 const height =14;
 console.log(base*height/2)

 //to Swap Two Variables
 let a = 15 
 let b = 20
 a=b ;
 console.log(a)
 console.log(b)

 // to Solve Quadratic Equation ????

 // to Convert Kilometers to Miles

 function convertKmtoMiles (num) {
   const factor = 0.621371

   return factor*num

 }
 convertKmtoMiles() 
 console.log(convertKmtoMiles(8))
 //to Convert Celsius to Fahrenheit
 //fahrenheit = celsius * 1.8 + 32
function convertCtoK (celsius) {
  return celsius * 1.8 + 32
}
convertCtoK()
console.log(Math.floor(convertCtoK(273)))
// Generate a Random Number
 function Random() {
   return Math.random()
 }
 Random()
 console.log(Random())

 //to Check if a number is Positive, Negative, or Zero
 function numbers(num) {

  if(num>0) {
    console.log(`the ${num}is pozitive `)
  }else if (num ===0) {
    console.log(`the ${num} is equel to zero `)
  }else  {
    console.log(`the ${num} is negative `)
  }
  
 } 
 numbers(0)
 //to Check if a Number is Odd or Even 
 function oddOrEven (num) {
   if(num % 2===0){
     return num +" is Even"
   }else  {
     return num + " is Odd"
   }
 }
 oddOrEven()
 console.log(oddOrEven(22))
  
//to Find the Largest Among Three Numbers
function maxNumber (num1,num2,num3) {
  return Math.max((num1,num2,num3))
}
maxNumber()
console.log(maxNumber(18,23,189))




// to Make a Simple Calculator
//a,b is two numbers and o :is operator to calculate

function basicCalculator(a, o, b) {
    var result;
    if(o === "+") { 
    return a + b;
    }else if(o === "-") {
        return a - b;
    } else if(o === "/" && b !== 0) { 
    return a / b; 
  } else if(o === "*") { 
    return a * b;
    }else {
    return "hesap yapılamadı lütfen düzgün karakter giriniz"
  }
    
}
   console.log(basicCalculator(12, "/", 3))



 function basicCalculator(a, o, b) {
    var result;
    if(o === "+") { 
    return a + b;
    }else if(o === "-") {
        return a - b;
    } else if(o === "/") {
    if(b===0) { 
        return null;
    }else {
      return a / b;
    }

  } else if(o === "*") { 
    return a * b;
    }else {
    return "hesap yapılamadı lütfen düzgün karakter giriniz"
  }
    
}
   console.log(basicCalculator(12, "/", 2));

// to Check if the Numbers Have Same Last Digit  son rakamları aynı olan sayıların 10 ile bolumunden kalan sayılar eşittir

let fisrtNumber = 131;
const result1 = num1 % 10 ;
let secondNumber = 141;
const result2 = num1 % 10;
let thirdNumber = 11;
const result3 = num1 % 10;
function lastDigit (fisrtNumber,secondNumber,thirdNumber) {
  if(result1===result2 && result2 ===result3) {
    return `${fisrtNumber},${secondNumber} and ${thirdNumber}  have same last digit`
  }else {
    return `${fisrtNumber},${secondNumber} and ${thirdNumber}  have  not same last digit`
  }
}
lastDigit()
console.log(lastDigit(fisrtNumber,secondNumber,thirdNumber))


//to Empty an Array

 function emptyArray() {
  arr = [];
  return arr 
}
const array = ["selim","isabetli",36]
const newArray = emptyArray(array)
console.log(newArray) 
// veya 
function emptyArray1(){
  arr.length = 0
  return arr
}
let array1 = ["selim","isabetli",36]
const newArray1 = emptyArray(array1)
console.log(newArray1) 
// to Add Element to Start of an Array

const myTeamList = ["barcelona","galatasaray","liverpool","psg"]
function myTeams (){
  myTeamList.unshift("golden state");
  return myTeamList
}
console.log(myTeams())

//to Remove Duplicates From Array