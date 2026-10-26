
import Category from "../../models/category.js";

const add_category = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Category added successfully",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default add_category;
