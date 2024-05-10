#! usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 9000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ['Ms.office', 'Html', 'javascript', 'Typescript', 'python']
    }
]);
const tutionfee = {
    "Ms.office": 2000,
    "Html": 2500,
    "javascript": 5000,
    "Typescript": 6000,
    "python": 10000
};
console.log(`\nTution Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ['Bank Transfer', 'Easypaisa', 'jazzcash']
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    }
]);
console.log(`\n/you select payment method ${paymentType.payment}\n`);
const tutionFees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`congratulations, you have sucessfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: 'select',
            type: 'list',
            message: 'what would you like to do next?',
            choices: ['view Status', 'Exit',]
        }
    ]);
    if (ans.select === "view Status") {
        console.log("\n*******status*******\n");
        console.log(`Student Name: ${answer.students}`);
        console.log('Student ID: ${randomNumber}');
        console.log(`course: ${answer.courses}`);
        console.log('Tution Fees paid: ${paymentAmount}');
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log('invalid amount due to course\n');
}
