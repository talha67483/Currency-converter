import inquirer from "inquirer";

let currency:any ={
    USD:1,
    UAED:3.67,
    EUR:0.90,
    PKR:279,
    INR:83.87,

}

let user_promt = await inquirer.prompt([{

    name:"from",
    type:"list",
    message:"Enter Currency name from convert ",
    choices:["USD","UAED","EUR","PKR","INR"]
},
{
    name:"to",
    type:"list",
    message:"Enter Currency to convert ",
    choices:["USD","UAED","EUR","PKR","INR"],
},
{
    name:"amount",
    type:"number",
    message:"Enter your Amount ",

}


])

let from_curr = currency[user_promt.from]
let to_curr = currency[user_promt.to]

let Amount = user_promt.amount/from_curr;
let total = Amount*to_curr;
let fix = total.toFixed(2)
console.log(fix);
// let fix = total.toPrecision(2)
// console.log(fix);

 




