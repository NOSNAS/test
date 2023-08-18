
const heading1 = document.querySelector("h1")
const heading2 = document.querySelector("h2")
const heading3 = document.querySelector("h3")
const heading4 = document.querySelector("h4")
const heading5 = document.querySelector("h5")
const heading6 = document.querySelector("h6")
const heading7 = document.querySelector("h7")
const heading8 = document.querySelector("h8")
const heading9 = document.querySelector("h9")
const heading10 = document.querySelector("h10")
const heading11 = document.querySelector("h11")

let text1 = "orange, advocado, mushroom";
let word = text1.slice(7,16);
heading1.innerHTML = word; 

let str = "pen, pencil, ruler";
heading2.innerHTML = str.substring(13);

const paragraph1 = document.querySelector("p1")
function theFunction() 
{
    let text = document.querySelector("p1").innerHTML;
    document.querySelector("p1").innerHTML =
    text.replace("YES","NO");
}

let text2 = document.querySelector("h3").innerHTML;
document.querySelector("h3").innerHTML = text2.toUpperCase();

let text3 = "Hello";
let text4 = "World!";
let text5 = text3.concat(" ",text4);
document.querySelector("h4").innerHTML = text5;

let x = 3.14;
let y = 3;
document.querySelector("h5").innerHTML = x + "<br>" + y;

let x1 = 123e5;
let y1 = 123e-5;
document.querySelector("h6").innerHTML = x1 + "<br>" + y1;

let x2 = 0.2 + 0.1;
document.querySelector("h7").innerHTML = "0.2 + 0.1 = " + x2;

let x3 = 10;
let y2 = 20;
let z = x3 + y2;
document.querySelector("h8").innerHTML = z;

let x4 = "100";
let y3 = "10";
let z1 = x4 / y3;   
document.querySelector("h9").innerHTML = z1;

const device = ["phone", "labtop", "watch", "computer"];
let size = device.length;
document.querySelector("h10").innerHTML = size;

document.querySelector("h11").innerHTML = device.toString();

const paragraph2 = document.querySelector("p2")
const paragraph3 = document.querySelector("p3")
const paragraph4 = document.querySelector("p4")
const paragraph5 = document.querySelector("p5")

document.querySelector("p2").innerHTML = device.join(" * ");

document.querySelector("p3").innerHTML = device.pop();

document.querySelector("p4").innerHTML = device;
device.pop();

const paragraph6 = document.querySelector("p6")
const paragraph7 = document.querySelector("p7")
const paragraph8 = document.querySelector("p8")
const paragraph9 = document.querySelector("p9")
const paragraph10 = document.querySelector("p10")
const paragraph11 = document.querySelector("p11")
const paragraph12 = document.querySelector("p12")

const date = new Date("2023-07-25");
document.querySelector("p5").innerHTML = date;

const date1 = new Date();
document.querySelector("p6").innerHTML = date1;

const date2 = new Date(2023, 20, 24, 11, 33, 30, 0);
document.querySelector("p7").innerHTML = date2;

const date3 = new Date(2021, 9, 21, 10);
document.querySelector("p8").innerHTML = date3;

const date4 = new Date(2020, 9, 22);
document.querySelector("p9").innerHTML = date4;


function multiply(value1, value2){
    let result = value1 * value2;
    return result;
}

let result = multiply(4, 3);
document.querySelector("p10").innerHTML = result;


let result1 = times(4, 8.12);
document.querySelector("p11").innerHTML = result1;

function times(a, b) {
  return a * b;
}