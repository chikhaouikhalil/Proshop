import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("21459708", 10),
    isAdmin: true,
  },
  {
    name: "Khalil Chikhaoui",
    email: "khalil@example.com",
    password: bcrypt.hashSync("21459708", 10),
  },
  {
    name: "Brahim Chikhaoui ",
    email: "brahim@example.com",
    password: bcrypt.hashSync("21459708", 10),
  },
];

export default users;
