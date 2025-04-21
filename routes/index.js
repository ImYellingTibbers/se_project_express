const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");
const auth = require("../middlewares/auth")

router.post("/signin", login);
router.post("/signup", createUser);

router.use(auth)

router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

module.exports = {
  indexRouter: router,
  userRouter,
};
