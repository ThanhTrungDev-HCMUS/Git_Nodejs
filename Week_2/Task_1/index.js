const chalk = require('chalk');
const moment = require('moment');
const Question = require("readline-sync");

const Datetime = new Date();
const YearNow = Datetime.getFullYear();


const Name = Question.question("What's your name? (User enter their name and enter): ");


const AgeString = Question.question("What's your year of birth? (User enter their yob and enter): ");
const AgeInt = parseInt(AgeString);
const Age = (function(){
    if(AgeInt <= 0 || AgeInt >= 2019 ){
        console.log('Please enter it again age!');
    }else
    {
        return `${YearNow-AgeInt}`
    }
 });

const Home_Town = Question.question("What's your home town? (user enter their home town and enter): ");

console.log('Thank you. Hello '+chalk.bgBlue(Name)+' , so you are '+ chalk.bgBlue(Age()) +' year old and from ' +chalk.bgBlue(Home_Town)+'.');

