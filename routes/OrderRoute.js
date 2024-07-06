import express from "express";
import { placeOrderController } from "../controller/PlaceOrderController.js";

const OrderRoute = express.Router()

OrderRoute.post('/placeOrder', placeOrderController)

export default OrderRoute;