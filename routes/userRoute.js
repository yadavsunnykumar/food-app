import express from "express";
import {
  getUserController,
  resetUserPasswordController,
  updateUserController,
  updateUserPasswordController,
} from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

// getUSers
router.get("/getUser", authMiddleware, getUserController);

//Update Users
router.put("/updateUser", authMiddleware, updateUserController);
// Update Users Password
router.put("/updateUserPassword", authMiddleware, updateUserPasswordController);
// reset password
router.post("/resetPassword", authMiddleware,resetUserPasswordController); 


export default router;
