import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc Create new order
//@route POST /api/orders
//@acces Private
const addOrderItems = asyncHandler(async (req, res) => {
    res.send('add order items');
});

//@desc Get logged in user orders
//@route GET /api/orders/myorders
//@acces Private
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders');
});

//@desc Get order by ID
//@route GET /api/orders/:id
//@acces Private
const getOrderById = asyncHandler(async (req, res) => {
    res.send('Get order by ID');
});

//@desc Update order to paid
//@route GET /api/orders/:id/pay
//@acces Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('Update order to paid');
});

//@desc Update order to delivered
//@route GET /api/orders/:id/deliver
//@acces Private/admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('Update order to delivered');
});

//@desc Get all orders
//@route GET /api/orders
//@acces Private/admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('Get all orders');
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};

