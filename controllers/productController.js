const Products = require("../models/productsmodel")

exports.productData = async(req,res) =>{
        const{product_name,product_description,product_price,product_category} = req.body
        console.log(req.body)
        console.log(req.file);
    
    try{
        const productdetails = new Products({
            product_name: product_name,
            product_description:  product_description,
            product_price:  product_price,
            product_category:  product_category,
            product_image: req.file.path,
            publicId: req.filename,
            resourceType: "image",
            mimeType: req.file.mimetype,
            
        })
        await productdetails.save()
        res.status(201).json({message:"Product added successfully", image: req.file.path})
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server error"})
    }
}