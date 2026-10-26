import Order from "../../models/Order.js";

const add_order = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Order added successfully",
      data: order,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default add_order;