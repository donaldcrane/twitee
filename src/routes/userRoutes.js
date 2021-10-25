import { Router } from "express";
import UserController from "../controllers/user";
import validator from "../middlewares/validator";
import userValidators from "../validators/user";

const router = Router();

const { createUser, signin } = UserController;
const { userValidation } = userValidators;

router.post(
  "/register",
  validator(userValidation, false),
  createUser
);
router.post(
  "/signin",
  validator(userValidation, false),
  signin
);

export default router;
