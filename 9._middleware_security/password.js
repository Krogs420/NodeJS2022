import bcrypt from "bcrypt"

const slatRounds = 12;
const plaintextPassword = "hunter12";
const loginPassword = "hunter12";
const encryptedPassword = "$2b$10$nOUIs5kJ7naTuTFkBy1veuK0kSxUFXfuaOKdOKf9xYT0KKIGSJwFa"

const encryptedPasswordResult = await bcrypt.hash(plaintextPassword, slatRounds);
//console.log(encryptedPassword);

const passwordComparison = await bcrypt.compare(loginPassword, encryptedPassword);
console.log(passwordComparison);