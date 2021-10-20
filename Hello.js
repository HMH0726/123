//S1410922032
//20211013

var weight;
var height;

const readline = require('readline-sync');
weight = readline.question('Enter Your Weight(Kilogram)?');
if (weight < 45 || weight > 200)
{
    console.log("Are you alien?");
}
height = readline.question('Enter Your Height(Centimeter)?');  
if (height < 100 || height > 200)
{
    console.log("Are you alien?");
}
var bmi = weight/((height/100)**2);
