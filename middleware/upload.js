const multer = require("multer")

const {CloudinaryStorage} = require("multer-storage-cloudinary")

const cloudinary = require("../config/cloudinary")

//img uploading code

const imageStorage =  new CloudinaryStorage({
    cloudinary,
    params:{
        folder: "product_images",
        resource_type:"image",
        allowed_formats:["jpeg","jpg","png","webp","jfif"]
    }
})
const uploadImages = multer({
    storage: imageStorage,
    limits: {fileSize: 5 *1024 *1024}
})

module.exports = {uploadImages}