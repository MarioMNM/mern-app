const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-errors");

let DUMMY_USERS = [
  {
    id: "u1",
    name: "Mario Novella",
    email: "test@test.com",
    password: "foobar",
  },
  {
    id: "u33",
    name: "El Nano",
    email: "nano@nano.com",
    password: "elnano",
  },
];

const getUsers = (req, res, next) => {
  res.status(200).json({ users: DUMMY_USERS });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError("Wrong credentials.", 401);
  }

  res.json({ message: "Logged in!" });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError("Could not create user, email already exists.", 422);
  }

  const createdUser = {
    id: uuidv4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

exports.getUsers = getUsers;
exports.login = login;
exports.signup = signup;
