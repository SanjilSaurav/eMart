import express from "express";
const router = express.Router();
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createproductReview, getTopProducts } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
//import products from "../data/products.js";

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById).put(protect, admin, updateProduct).delete(protect, admin, deleteProduct );
router.route('/:id/reviews').post(protect, createproductReview);

export default router;