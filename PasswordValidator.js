const readlineSync = require('readline-sync');




let Mypassword = '';
let isValid = false;


console.log("Welcome! Please follow the requirements while creating your password. \n1. The password must be at least 8 characters long. \n2. The password must contain at least one uppercase letter. \n3. The password must contain at least one number.")


while (!isValid) {
 password = readlineSync.question("Please enter your password,:");


 // Checking the length of the password.
 if (password.length < 8) { // if the length is less than 8
   console.log("Your password must be at least 8 characters long.");
   continue; //asking again
 }


 // Checking if the passwork has at least 1 uppercase letter or not
 let hasUppercase = false;
 for (let i = 0; i < password.length; i++) {
   if (password[i] >= 'A' && password[i] <= 'Z') { //checking if the password has uppercase A-Z
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
 for (let i = 0; i < password.length; i++) {
   if (password[i] >= '0' && password[i] <= '9') { //checking if the number is between 0 to 9 or not
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


console.log("Your password has been accepted. \nYou have successfully created a password that meets all the given requirements. \nThank you!");
