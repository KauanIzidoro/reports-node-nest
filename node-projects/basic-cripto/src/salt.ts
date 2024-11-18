import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

// Hashes are great for making passwords unreadble, but because they always produce the same output, they 
// are not very secure. A salt is a random string that is added to the input before hashing. This makes the hash more unique and harder
// to guess.


// Users often to use weak passwords, like "password123". When a database is compromised, the attacker can easily find the value 
// of an unsalted hash by searching precomputed 'rainbow table' of common hashes - salting fixes this.


// 1 - Used to make a hash harder to guess
// 2 - Appends a random string to the input before hashing


// user structure 
interface User {
    email: string;
    password: string; // the format is "salt:hashedPassword"
}

const users: User[] = [];

function signup(email: string, password: string): User {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user: User = { email, password: `${salt}:${hashedPassword}` };

    users.push(user);

    return user;
}

function login(email: string, password: string): string {
    const user = users.find(u => u.email === email);

    if (!user) {
        return 'login fail! User not found';
    }

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    return match ? 'login success!' : 'login fail!';
}

// Testando o código
const user = signup('foo@bar.com', 'pa$$word');
console.log(user);

const result = login('foo@bar.com', 'password');
console.log(result);
