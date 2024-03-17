import { Router } from "express";
import path from 'path'; 
import fs from 'fs'; 
import multer from "multer"; 

import {
  loginUser,
  registerUser,
  sendEmail,
  UserProfile,
  GoogleloginUser,
  uploadImage
} from "../controllers/user.controller.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/temp'); // Set the destination folder
  },
  filename: (req, file, cb) => {
    // Set the filename to 'image.png' regardless of the original filename
    cb(null, 'image.png');
  }
});

const upload = multer({ storage: storage });

const tempDir = path.join('public', 'temp');

const deleteFilesInDir = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    fs.unlinkSync(filePath); 
    console.log(`Deleted file: ${filePath}`);
  });
};

const clearTempDirectory = (req, res, next) => {
  if (fs.existsSync(tempDir)) {
    console.log(`Clearing temporary directory: ${tempDir}`);
    deleteFilesInDir(tempDir);
  }

  next();
};


const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/googlelogin").post(GoogleloginUser);
router.route("/sendemail").post(sendEmail) ;
router.post('/upload', clearTempDirectory, upload.single('image'), uploadImage);
router.route("/profile").get(UserProfile) ; 

export default router;
