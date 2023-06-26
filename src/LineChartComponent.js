import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartComponent = ({ lineChartData }) => {
  return (
    <LineChart width={600} height={300} data={lineChartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="authorized"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="unauthorized"
        stroke="#82ca9d"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default LineChartComponent;
