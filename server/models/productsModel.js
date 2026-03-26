const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image :{ type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true, unique: false },
  isPopular: {type: Boolean, required: true, default: false },  
  productType: {type: String, required: true}

});

module.exports = mongoose.model("product", productSchema);

// Every product will have name, price, color, description and ID of category from categories collection.
