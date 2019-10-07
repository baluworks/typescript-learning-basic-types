import  Employee from "./Employee";
// Import stylesheets
import "./style.css";

//Enumerations :
enum Color {
  RED,
  GREEN,
  BLUE
}

let colorValue: Color = Color.BLUE;
let colorString: String = Color[colorValue];
let data: String = "";
data += `<br>${colorString}-${colorValue}`;

//Enumetarions
enum Kid {
  Yoshita,
  Mukunda,
  Nandana,
  Anjana,
  yuvan,
  Bhuvi
}

Object.keys(Kid).map(val => {
  console.log(val);
});

let firstKidName: String = Kid[0];
let lastKidName: String = Kid[Object.keys(Kid).length / 2 - 1];

data += `<br>${firstKidName} -${0}-${lastKidName}-${Object.keys(Kid).length /
  2 -
  1}`;

// An Array with fixed number of elements whose types are  uknown.
let tuple: [string, number, boolean];
tuple = ["Hello", 0, true];
data += `<br>Tuple Example : ${tuple[0]}-${tuple[1]}-${tuple[2]}`;

console.log(tuple);

//Any type is used when we dont know the type of the variable when writing code.(like response from)
let anyObject: any = {};
console.log(anyObject);

// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value

let nullVoidString: null | number | undefined;
nullVoidString = 12233;
console.log(nullVoidString);

//Type Assertion : allow you to set the type of avalue and  tell compiler not to infer it.
//simpley typcaste in other languages.
 let empData =<Employee> {
 
 };
 console.log(empData.firstName);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter ${data}</h1>`;
