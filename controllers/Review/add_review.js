import Review from "../../models/review.js";

const add_review = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export default add_review;