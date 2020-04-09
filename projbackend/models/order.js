const mongoose = require("mongoose");
const { ObejectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObejectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});
const ProductCart = mongoose.model("ProductCart ", ProductCartSchema);

//i have chosen s instead of S
const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: { type: String },
    updated: Date,
    user: {
      type: ObejectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order,", orderSchema);

module.exports = { Order, ProductCart };
