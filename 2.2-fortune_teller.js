const tellFortune = function(jobTitle, location, partnerName, numberOfChildren){
    let str = `You will be a ${jobTitle} in ${location} and married to 
    ${partnerName} with ${numberOfChildren} children.`
    return str;
}

let itzik = tellFortune(`glazier`, `Kazakhstan`, `Yocheved`, 1000);
console.log(itzik);