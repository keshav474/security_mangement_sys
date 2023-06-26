import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarChartComponent = ({ data }) => {
  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="api" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="unauthorizedRequests" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartComponent;
