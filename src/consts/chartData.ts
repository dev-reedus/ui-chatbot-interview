import { ChartData } from "@/components/message/chart-message/chart-message.model.ts";

export const chartData = {
  type: "bar" as ChartData["type"],
  title: "Monthly Sales Report",
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales ($)",
      data: [
        12000, 19000, 8000, 15000, 22000, 18000, 25000, 20000, 17000, 24000,
        16000, 21000,
      ],
      backgroundColor: "rgba(239, 68, 68, 0.8)",
      borderColor: "rgba(239, 68, 68, 1)",
      borderWidth: 2,
    },
    {
      label: "Target ($)",
      data: [
        15000, 18000, 12000, 17000, 20000, 16000, 21000, 14000, 19000, 22000,
        15000, 20000,
      ],
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      borderColor: "rgba(59, 130, 246, 1)",
      borderWidth: 2,
    },
  ],
};
