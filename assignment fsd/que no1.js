let i = Number(prompt("enter the first number"));
let j = Number(prompt("enter the second number"));
let k = Number(prompt("enter the third number"));
let z = Number(prompt("enter the fourth number"));
let l = Number(prompt("enter the fifth number"));

function sum(i, j, k, z, l) {
    return i + j + k + z + l;
}

alert("total sum: " + sum(i, j, k, z, l));
console.log("total sum:", sum(i, j, k, z, l));
