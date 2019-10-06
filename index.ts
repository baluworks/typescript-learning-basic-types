// Import stylesheets
import './style.css';

//Enumerations :
enum Color {RED,GREEN,BLUE};


let colorValue :Color = Color.BLUE;
let colorString:String = Color[colorValue];
let data:String ="";
data+=`<br>${colorString}-${colorValue}`;

//Enumetarions
enum Kid {Yoshita,Mukunda,Nandana,Anjana,yuvan,Bhuvi};

Object.keys(Kid).map( val=>{
  console.log(val);
});

let firstKid:String =Kid[0];
let lastKid:String =Kid[(Object.keys(Kid).length/2 - 1)];
data+=`<br>${firstKid}-${lastKid}`;

let tuple:[string,number,boolean];
tuple =['Hello', 0,true];
data+=`<br>Tuple Example : ${tuple[0]}-${tuple[1]}-${tuple[2]}`;

console.log(tuple)

let anyObject:any= {}
console.log(anyObject);
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter ${data}</h1>`;