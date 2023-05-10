let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
// that looks for between 3 and 6 characters and at least one number

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\D*\d\d)/;
let result = pwRegex.test(sampleWord);
// to match passwords that are greater than 5 characters long, and have two consecutive digits.

/*
Usernames can only use alpha-numeric characters.
The only numbers in the username have to be at the end.
There can be zero or more of them at the end. Username cannot start with the number.
Username letters can be lowercase and uppercase.
Usernames have to be at least two characters long.
A two-character username can only use alphabet letters as characters.
*/
let userCheck = /(^[a-z][a-z]+[0-9]*$)|(^[a-z]\d\d+$)/gi;