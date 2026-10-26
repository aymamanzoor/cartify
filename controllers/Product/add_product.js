import Product from "../../models/product.js";

const add_product = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default add_product;