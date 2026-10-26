import express from "express";

import add_user from "../controllers/User/add_user.js";
import add_product from "../controllers/Product/add_product.js";
import add_category from "../controllers/Category/add_category.js";
import add_order from "../controllers/Order/add_order.js";
import add_cart from "../controllers/Cart/add_cart.js";
import add_review from "../controllers/Review/add_review.js";

const router = express.Router();

router.post("/users", add_user);
router.post("/products", add_product);
router.post("/categories", add_category);
router.post("/orders", add_order);
router.post("/carts", add_cart);
router.post("/reviews", add_review);

export default router;