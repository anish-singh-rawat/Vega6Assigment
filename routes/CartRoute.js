import express from "express";
import { addToCart, deleteCartItem, getCartItem } from "../controller/CartController.js";

const CartRoute = express.Router();


CartRoute.post('/AddCartItem', addToCart)
CartRoute.get('/getCartItem/:id', getCartItem)
CartRoute.delete('/deleteCartItem',  deleteCartItem)


export default CartRoute