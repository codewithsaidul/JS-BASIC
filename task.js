/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk



*/

// let burgerPrice = 501;

// if (burgerPrice > 500) {
//     console.log("Coke Are Free");
// } else {
//     console.log("Coke Price is 30tk");
//     // First Task Are Done
// }


/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// function calculateBMI(weight, height) {
//     let bmi = weight / (height * height);

//     if (bmi < 18.5) {
//         console.log("You Are Underweight");
//     } else if (bmi >= 18.5 && bmi <= 24.5) {
//         console.log("you Are Normal");
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         console.log("You Are Overweight")
//     } else {
//         console.log("You Are Obese")
//     }
//     console.log(bmi)
// }

// calculateBMI(55, 1.70688)

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

// function grade(sub) {
//     if (sub >= 90 && sub <= 100){
//         console.log("Your Grade is A")
//     } else if (sub >= 80 && sub <= 89) {
//         console.log("Your Grade is B")
//     } else if (sub >= 70 && sub <= 79) {
//         console.log("Your Grade is C")
//     } else if (sub >= 60 && sub <= 69) {
//         console.log("Your Grade is D")
//     } else {
//         console.log("Your Grade is F")
//     }
// }

// grade(60)



/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// function myScore (score) {
//     if (score > 80) {
//         let freind = 30;

//         if (freind > 80) {
//             console.log("Go for a Lunch");
//         } else if (freind >= 60) {
//             console.log("Good Luck Next Time")
//         } else if (freind >= 40) {
//             console.log("Keep Your Friend's Message Unseen")
//         } else {
//             console.log("Block My Friend")
//         }
//     } else {
//         console.log("going to sleep")
//     }
// }


// myScore(81)

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

// let num1 = 100;

// let num2 = 80;

// const result = num1 > num2 ? num1 * 2 : num1 + num2;

// console.log(result)


/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


function ticket (age) {
    if (age < 10) {
        console.log("Ticket are Free")
    } else if (age === "student") {
        let ticketPrice = 800;
        let discount = ticketPrice % 50 * 100;

        console.log(discount)
    } else if (age >= 60) {
        let ticketPrice  = 800;
        let discount = ticketPrice % 15 * 100
        console.log(discount)
    }
}

ticket("student")


