// File: src/Dashboard/components/SpendingTrendChart.tsx
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import type { SpendingTrendPoint } from '../../types';

interface Props {
  data: SpendingTrendPoint[];
}

const SpendingTrendChart: React.FC<Props> = ({ data }) => (
  <div className="w-full h-full p-4 bg-white rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Spending Trend (Cumulative)</h3>
    <ResponsiveContainer width="100%" height="85%">
      <AreaChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis dataKey="day" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} tickFormatter={(val) => `₹${val/1000}k`} />
        <Tooltip formatter={(value: number) => [
            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value),
            "Cumulative Spend"
        ]} />
        <Area type="monotone" dataKey="cumulative_spend" stroke="#3b82f6" fill="#bfdbfe" strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export default SpendingTrendChart;