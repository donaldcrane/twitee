import bcrypt from "bcrypt";
import models from "../models";
import sendGrid from "../utils/sendgrid";
import { successResponse } from "../utils/responses";
import jwtHelper from "../utils/jwt";

const { generateToken } = jwtHelper;
/**
 * @class UserController
 * @description create, verify and log in user
 * @exports UserController
 */
export default class UserController {
  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async createUser(req, res) {
    const { email, password } = req.body;
    const emailExist = await models.Users.findOne({ where: { email } });
    if (emailExist) {
      return res.status(409).json({ status: 409, error: "email already registered by another user." });
    }

    const username = email.substring(0, email.lastIndexOf("@"));
    const hashedPassword = await bcrypt.hash(password, 10);
    await models.Users.create({
      name: username, email, password: hashedPassword,
    });
    await sendGrid.onBoardMessage(email, username);
    return successResponse(res, 201, "Account created successfully, Kindly login.");
  }

  /**
   * @param {object} req - The reset request object
   * @param {object} res - The reset errorResponse object
   * @returns {object} Success message
   */
  static async signin(req, res) {
    const { email, password } = req.body;
    const user = await models.Users.findOne({ where: { email } });
    if (!user) { return res.status(404).json({ status: 404, error: "Email does not exist." }); }
    const validpass = await bcrypt.compare(password, user.password);
    if (!validpass) { return res.status(404).json({ status: 404, error: "Password is not correct!." }); }
    let { name, _id } = user;
    const token = await generateToken({ _id, name, email });
    return successResponse(
      res,
      200,
      "User Logged in Successfully.",
      token
    );
  }
}
