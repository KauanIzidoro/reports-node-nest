import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

// Encryption is the process of making a message confidential (like a hash), while allowing it to be reversible (decrypted) with the key
// Each time a message is encrypted it is randomized to a produce a different output. In symmetric encryption, the same key
// is used to encrypt and decrypt the message.

// 1 - The same input will produce a different output, unlike hashes
// 2 - Encrypted message can be reversed with the key
// 3 - Same key used to encrypt and decrypt message

/// Cipher
const message: string = "secret-message";
const key: string = randomBytes(32).toString();
const lv: string = randomBytes(16).toString();

const cipher = createCipheriv('aes256', key, lv);

// Encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex') + cipher.final('hex');
console.log(`Encrypted: ${encryptedMessage}`);


// Decrypt
const decipher = createDecipheriv('aes256',key,lv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf8') + decipher.final('utf8');
console.log(`Decrypted: ${decryptedMessage.toString()}`);

