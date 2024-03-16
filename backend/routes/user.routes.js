import { Router } from "express";
import {
  loginUser,
  registerUser,
  sendEmail,
  UserProfile,
  GoogleloginUser,
} from "../controllers/user.controller.js";


const router = Router();

router.route("/signup").post(registerUser);

router.route("/login").post(loginUser);
router.route("/googlelogin").post(GoogleloginUser);

router.route("/sendemail").post(sendEmail) ;

router.route("/profile").get(UserProfile) ; 

export default router;