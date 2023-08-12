import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFiltersController,
  productListController,
  productPhotoController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controllers/ProductController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/delete-product/:pid", deleteProductController);

// filter product
router.post("/product-filters", productFiltersController);

// product count
router.get("/product-count", productCountController);

// product per page count
router.get("/product-list/:page", productListController);

// search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", similarProductController);

// category wise product
router.get("/product-category/:slug", productCategoryController);

// payment routes
//token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);

export default router;
