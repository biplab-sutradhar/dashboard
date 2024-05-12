import User from '../models/User.js';
import OverallStat from '../models/OverallStat.js';
import Transaction from '../models/Transaction.js';

// Exporting directly at the point of declaration
export default async function getUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      // If user with the provided ID is not found
      return res.status(404).json({ message: 'User not found' });
    }
    // If user is found, return it
    res.status(200).json(user);
  } catch (err) {
    // Catch any errors that occur during the process
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: 'Server error' }); // Generic error message for the client
  }
}
export const getDashboardStats = async (req, res) => {
  try {
    // hardcoded values
    const currentMonth = "November";
    const currentYear = 2024;
    const currentDay = "2021-11-15";

    /* Recent Transactions */
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    /* Overall Stats */
    const overallStat = await OverallStat.find({ year: currentYear });

    if (overallStat.length === 0) {
      // Handle case where no overall stats are found
      return res.status(404).json({ message: "No overall stats found." });
    }

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth;
    });

    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === currentDay;
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
