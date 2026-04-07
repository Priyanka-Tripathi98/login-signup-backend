const Products = require("../models/productsmodel")

exports.productData = async (req, res) => {
    // 1. Check if the file actually exists before proceeding
    if (!req.file) {
        return res.status(400).json({ message: "No image uploaded" });
    }

    const { product_name, product_description, product_price, product_category } = req.body;

    try {
        const productdetails = new Products({
            product_name,
            product_description,
            product_price,
            product_category,
            product_image: req.file.path,
            publicId: req.file.filename, // Note: Changed from req.filename to req.file.filename
            resourceType: "image",
            mimeType: req.file.mimetype,
        });

        await productdetails.save();
        res.status(201).json({ 
            success: true, 
            message: "Product added successfully", 
            image: req.file.path 
        });
    } catch (err) {
        console.error("Database Error:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
};