/*functional approach to JS */

//problem statement is suppose we have to increase the salary then

//1.Use objects -->object oriented programming
//2.Use functional approach-->less data mutuations in Immutability
//use const keyword to gain immutability

//seperation of data and functions:
//functional programming--> data is passed as arguments and original data is not modified
//oject oriented programming-->functions are wrapped around objects

//OOPS-->direct access to data as data is stored in objects so giving access to developers to data might alter the data in an unwanted way.
//Functional programming-->pass data as arguments

//todo list example

//object oriented programming-->member variables ,classes ,-->data can be modified with this operator-->an instance of the class termed as object
//functions-->pass data as arguments like a mathematical function so very easy to deug

//ensuring immutability

//testing now
/*
try{
const x=5;
x=6;
}
catch(error){
    console.log(error);
}
*/
const numbers=[1,2,3,4,5];
numbers[0]=100;
console.log(numbers[0]);
