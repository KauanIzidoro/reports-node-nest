import { createHash } from 'crypto';

// The words hash actually has culinary roots. It means to chop and mix and that perfectly describe what
// a hashing function does. It takes an input value of any length and outputs a fixed length value. Hashing algorithms, like SHA (Secure Hashing Algorithm).
// produce a random, unique, fixed-length string from a given input. They are often used to compare two values, like passwords, for equality.

// Concepts:
// 1 - The same input will always produce the same output.
// 2 - Fast to compute, but computationally expensive to find the original input.
// 3 - Small probability of collision (unique)

// Create a string hash
function hash(str: string){
    return createHash('sha256').update(str).digest('hex');
}

// Compare two hashed passwords

let password: string = 'security-password!';
const user_password1: string = hash(password);
export default user_password1;

/// ... some time later

password = 'secutiry-password!!';
const user_password2: string = hash(password);


const match = user_password1 === user_password2;
// console.log(user_password1);
// console.log(user_password2);

console.log(match ? 'good password' : 'password does not match');
