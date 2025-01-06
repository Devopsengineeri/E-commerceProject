//function for add product info

import productModel from "../model/productModel.js";

const addProject = async (req, res) => {
  try {
    const {
      name,
      description,

      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    // console.log(addProject, "body req");
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    const imageUrl = images.map((image) => `/uploads/${image.filename}`);
    // console.log(imageUrl, "hhhhhhhhhhh");
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true", //
      sizes: JSON.parse(sizes),
      images: imageUrl,
      date: Date.now(),
    };

    // Save the product to the database
    const product = new productModel(productData);
    await product.save();

    console.log(imageUrl, "Uploaded Image URLs");
    console.log(productData, "Product Details");
    console.log(req.files, "Uploaded Files");

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product: productData,
    });
  } catch (error) {
    console.error("Error in addProject:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};

//function for list product info
const listProject = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    console.error("Error in listProject:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};
//function for removing product info
const removeProject = async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.body.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.error("Error in removeProject:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to remove product",
      error: error.message,
    });
  }
};

//function for single product info
const singleProject = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    console.error("Error in singleProject:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

export { addProject, listProject, removeProject, singleProject };
