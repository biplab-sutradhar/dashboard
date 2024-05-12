import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  ProductId: String,
  yearlySalesTotal: Number,
  yearlyTotalSoldUnits: Number,
  year: Number,
  monthlyData: [{
    month: String, // Ensure month is defined as Number
    totalSales: Number,
    totalUnits: Number
  }],
  dailyData: [{
    day: Number,
    totalSales: Number,
    totalUnits: Number
  }]
}, {
  timestamps: true
});

const ProductStat = mongoose.model('ProductStat', ProductSchema);
export default ProductStat;
