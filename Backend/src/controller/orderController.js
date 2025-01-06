// Placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using placeOrderStripe method
const placeOrderStripe = async (req, res) => {};

// Placing orders using placeOrderRazorpay method
const placeOrderRazorpay = async (req, res) => {};

// Placing orders using allOrder method
const allOrders = async (req, res) => {};

// Placing orders using userUpdate method
const userOrders = async (req, res) => {};

// Placing orders using updateStatus method
const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
