import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, Line } from "recharts";
import PieComponent from "./PieComponent";
import LineChartComponent from "./LineChartComponent";
import BarChartComponent from "./BarChartComponent";

export default function AdminDashboard() {
  const dataPie = [
    { name: "Authorized", value: 80 },
    { name: "Unauthorized", value: 15 },
    { name: "Bad Request", value: 5 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const lineChartData = [
    { time: "00:00", authorized: 10, unauthorized: 5 },
    { time: "03:00", authorized: 15, unauthorized: 8 },
    { time: "06:00", authorized: 8, unauthorized: 3 },
    { time: "09:00", authorized: 20, unauthorized: 12 },
    { time: "12:00", authorized: 25, unauthorized: 10 },
    { time: "15:00", authorized: 18, unauthorized: 6 },
    { time: "18:00", authorized: 12, unauthorized: 4 },
    { time: "21:00", authorized: 9, unauthorized: 3 },
  ];

  const barChartData = [
    { api: "/home/user", unauthorizedRequests: 10 },
    { api: "/home/account", unauthorizedRequests: 5 },
    { api: "/home/transaction", unauthorizedRequests: 8 },
    { api: "/home/product", unauthorizedRequests: 3 },
    { api: "/home/report", unauthorizedRequests: 12 },
  ];
  return (
    <div>
      AdminDashboard
      <PieComponent dataPie={dataPie} />
      <LineChartComponent lineChartData={lineChartData} />
      <BarChartComponent data={barChartData} />
    </div>
  );
}
