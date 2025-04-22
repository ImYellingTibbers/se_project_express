const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const auth = require("../middlewares/auth")

router.post("/signin", login);
router.post("/signup", createUser);
router.use("/items", clothingItemRouter);

router.use("/users", auth, userRouter);

module.exports = {
  indexRouter: router,
  userRouter,
};
