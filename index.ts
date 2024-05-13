#! /usr/bin/env node

import inquirer  from "inquirer";
const randomeNumber =Math.floor(Math.random()*1+6);



const answer = await inquirer . prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"please guess a number between 1 -6",



    },


     
]);

console.log(answer);

if(answer.userguessednumber === randomeNumber){
    console.log("congrats! you guessed right number. ");
}
else{
    console.log("sorry! you guessed wrong number");
}

