const describeCountry = function(country, population, capitalCity){
    let str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return str;
}

let a = describeCountry(`Israel`, 99999999999, `Jerusalem`);
let b = describeCountry(`China`, 2, `Shanghai`);
let c = describeCountry(`France`, 453535345435, `Paris`);

console.log(a);
console.log(b);
console.log(c);