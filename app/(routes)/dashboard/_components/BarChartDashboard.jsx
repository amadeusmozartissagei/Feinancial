import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function BarChartDashboard({ budgetList }) {
  // Transformasi data untuk menghitung persentase
  const transformedData = budgetList.map(item => ({
    name: item.name,
    totalSpend: item.totalSpend,
    remainingAmount: item.amount - item.totalSpend > 0 ? item.amount - item.totalSpend : 0
  }));

  return (
    <div className="border rounded-2xl p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={"80%"} height={300}>
        <BarChart
          data={transformedData}
          margin={{
            top: 7,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSpend" stackId="a" fill="#4845d2" name="Pengeluaran" />
          <Bar dataKey="remainingAmount" stackId="a" fill="#C3C2FF" name="Sisa Budget" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;