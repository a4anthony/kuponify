import bcrypt from "bcryptjs";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const bool = [false, true];
const namePrefix = ["Green", "Red", "Yellow", "Black"];
const firstName = ["Han", "Jabba", "Lika", "Luke ", "Princess"];
const lastName = ["Solo", "Hutt", "Byka", "Skywalker", "Organa"];

function createUser() {
  let users = [];
  for (let i = 0; i <= 10; i++) {
    const prefixVal = getRandomIntInclusive(0, 3);
    const firstNameVal = getRandomIntInclusive(0, 4);
    const lastNameVal = getRandomIntInclusive(0, 4);
    const name = `${namePrefix[prefixVal]} ${firstName[firstNameVal]} ${lastName[lastNameVal]}`;
    users.push({
      name: `${name}`,
      email: `user${i}@example.com`,
      accessToken: `accessToken${i}`,
      localToken: `localToken${i}`,
      password: bcrypt.hashSync("12345678", 10),
      isAdmin: bool[getRandomIntInclusive(0, 1)],
      isActive: true,
      emailVerifiedAt: null,
    });
  }
  return users;
}

const users = createUser();

export default users;
