const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const {
  NOT_FOUND
} = require("../utils/errors");

router.post("/signin", login);
router.post("/signup", createUser);
router.use("/items", clothingItemRouter);

router.use("/users", userRouter);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = {
  indexRouter: router,
  userRouter,
};
