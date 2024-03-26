#!/usr/bin/env nod
import inquirer from "inquirer";

let data =await inquirer.prompt([
    {
        name: "val1",
        message: "Enter first value: ",
        type: "input"
    },
    {
        name: "opp",
        message: "Enter opperater: ",
        type: "input"
    },
    {
        name: "val2",
        message: "Enter Second value: ",
        type: "input"
    }
])
if (data.opp == '+' || data.opp == '-' || data.opp == '/' || data.opp == '*'){
    if ((/^\d+$/.test(data.val1)) && (/^\d+$/.test(data.val2))){
        let result = eval(`${data.val1} ${data.opp} ${data.val2}`)
        console.log(`Result is : ${result}`);
    }
    else{
        console.log("Invalid Input...!")    
    }   
}
else{
    console.log("Invalid Oppereator...!")
}