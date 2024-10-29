const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },                // Title of the product
    designer: { type: String, required: true },             // Designer of the product
    images: [{ type: String, required: true }],             // Array of image URLs
    dimensions: { type: String },                            // Dimensions of the product
    availableColors: [{ type: String }],                    // Array of available colors
    price: { type: Number, required: true },             // New price of the product
    oldPrice: { type: Number },                              // Old price of the product
    discountPercent: {
        type: Number,
        default: function () {
            if (this.oldPrice && this.oldPrice > this.newPrice) {
                return Math.round(((this.oldPrice - this.newPrice) / this.oldPrice) * 100);
            }
            return null;
        }
    },
    rating: { type: Number, min: 0, max: 5, default: 0 },  // Rating from 0 to 5
    isNewProduct: { type: Boolean, default: false },               // Indicates if the product is new
    isSoldOut: { type: Boolean, default: false },           // Indicates if the product is sold out
    availableUnits: { type: Number, default: 0 },          // Number of available units
    descriptionTitle: { type: String },                      // Title for the product description
    descriptionText: { type: String }                        // Text for the product description
});

module.exports = mongoose.model('Product', productSchema);
