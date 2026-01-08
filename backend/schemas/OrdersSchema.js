const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, //buy or Sell
});

module.exports = { OrdersSchema };
