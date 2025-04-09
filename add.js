const bcrypt = require("bcrypt");

async function hashPassword() {
  const password = "super999"; // Replace with your chosen password
  const saltRounds = 10; // Number of salt rounds (recommended: 10-12)
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  console.log("Hashed Password:", hashedPassword);
}

hashPassword();
