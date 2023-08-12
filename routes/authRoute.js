import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";

// router objects for login and register
const router = express.Router();

// creating router for register
router.post("/register", registerController);

// creating router for login
router.post("/login", loginController);

// creating router for forgot-Password
router.post("/forgot-password", forgotPasswordController);

// creating router for protected user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// creating router for protected admin auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// test routes
router.get("/test", requireSignIn, isAdmin, testController);

// update user profile
router.put('/profile', requireSignIn, updateProfileController)

// orders
router.get('/orders', requireSignIn, getOrdersController)

// all orders
router.get('/all-orders', requireSignIn,isAdmin, getAllOrdersController)

// order status update api

router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router;
