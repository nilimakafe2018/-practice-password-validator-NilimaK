const readlineSync = require('readline-sync');

let NewPassword = ''; 
let isValid = false; 

console.log("Welcome! Please follow the requirements while creating your password. \n1. The password must be at least 8 characters long. \n2. The password must contain at least one uppercase letter. \n3. The password must contain at least one number from 0 to 9.")

while (!isValid) {
  NewPassword = readlineSync.question("Please enter your password,:");

//Checking the length of the password.
 if (NewPassword.length < 8) { // checking if the length is less than 8 or not 
   console.log("Your password must be at least 8 characters long."); 
   continue; //asking again
 }

 // Checking if the passwork has at least 1 uppercase letter or not
 let hasUppercase = false;
 for (let i = 0; i < NewPassword.length; i++) {
   if (NewPassword[i] >= 'A' && NewPassword[i] <= 'Z') { //checking if the password has uppercase A-Z or not
     hasUppercase = true;
     break;
   }
 }
 if (!hasUppercase) {
   console.log("Password must contain at least one uppercase letter."); //printing message if there is not any uppercase letter
   continue; //asking again
 }

 // Checking if there is any number or not
 let hasNumber = false;
 for (let i = 0; i < NewPassword.length; i++) {
   if (NewPassword[i] >= '0' && NewPassword[i] <= '9') { //checking if the number is between 0 to 9 or not
     hasNumber = true;
     break;
   }
 }
 if (!hasNumber) {
   console.log("Password must contain at least one number.");
   continue; //asking again
 }

 // If all the requirements is passed
 isValid = true;
}

//Printing the final output 
console.log("Your password has been accepted. \nYou have successfully created a password that meets all the given requirements. \nThank you!");
