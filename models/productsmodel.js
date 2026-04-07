const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

        product_name : {
            type: String,
            require: true
        },
        
        product_description : {
            type: String,
            require: true
        },

        
        product_price : {
            type: String,
            require: true
        },

        
        product_category : {
            type: String,
            require: true
        },
        
        product_image : {
            type: String,
            require: true

        },

         publicId : {
        type: String,
        require: true,
    },
    resourceType: {
        type: String,
        require: true,
    },
    mimetype: {
        type: String,
    }

})


module.exports = mongoose.model("products", ProductSchema);