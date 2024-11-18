import { createHmac } from "crypto";


// HMAC is a keyed hash of data - like a hash with password. To create a HMAC you need to have the key, therefore allowing you 
// to verify both the authenticity and originator of the data. Using a different key produces a different output.

// 1 - Think of HMAC (keyed-hash message authentication code) as hash with password or key.
// 2 - Only someone with the key can create an authentic hash 


const password: string = "super-secret-password";
const message: string = "hello computer";

const hmac = createHmac('sha256', password).update(message).digest('hex');

console.log(hmac);
