import Cart from "../../models/cart.js";

const add_cart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Cart created successfully",
      data: cart,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default add_cart;