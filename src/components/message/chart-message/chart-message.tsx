import React, { useEffect, useRef } from "react";
import { Chart, ChartConfiguration, registerables } from "chart.js";
import { ChartProps } from "@/components/message/chart-message/chart-message.model.ts";

Chart.register(...registerables);

const ChartMessage: React.FC<ChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const defaultColors = [
      "rgba(239, 68, 68, 0.8)",
      "rgba(59, 130, 246, 0.8)",
      "rgba(16, 185, 129, 0.8)",
      "rgba(245, 158, 11, 0.8)",
      "rgba(139, 92, 246, 0.8)",
      "rgba(236, 72, 153, 0.8)",
    ];

    const defaultBorderColors = [
      "rgba(239, 68, 68, 1)",
      "rgba(59, 130, 246, 1)",
      "rgba(16, 185, 129, 1)",
      "rgba(245, 158, 11, 1)",
      "rgba(139, 92, 246, 1)",
      "rgba(236, 72, 153, 1)",
    ];

    const processedDatasets = data.datasets.map((dataset, index) => ({
      ...dataset,
      backgroundColor:
        dataset.backgroundColor ||
        (data.type === "pie" || data.type === "doughnut"
          ? defaultColors
          : defaultColors[index % defaultColors.length]),
      borderColor:
        dataset.borderColor ||
        defaultBorderColors[index % defaultBorderColors.length],
      borderWidth: dataset.borderWidth || 2,
    }));

    const defaultOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: !!data.title,
          text: data.title,
          color: "white",
          font: {
            size: 16,
            weight: "bold" as const,
          },
        },
        legend: {
          labels: {
            color: "white",
          },
        },
      },
      scales:
        data.type !== "pie" &&
        data.type !== "doughnut" &&
        data.type !== "radar" &&
        data.type !== "polarArea"
          ? {
              x: {
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              y: {
                ticks: {
                  color: "rgba(255, 255, 255, 0.7)",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
            }
          : {},
    };

    const chartConfig = {
      type: data.type,
      data: {
        labels: data.labels,
        datasets: processedDatasets,
      },
      options: {
        ...defaultOptions,
      },
    };

    try {
      chartRef.current = new Chart(
        canvasRef.current,
        chartConfig as ChartConfiguration,
      );
    } catch (error) {
      console.error("Error creating chart:", error);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  if (!data.labels?.length || !data.datasets?.length) {
    return (
      <div className="text-gray-400 text-sm p-4 text-center">
        No chart data available
      </div>
    );
  }

  return (
    <div className={`w-full min-w-0`}>
      <div className="relative h-64 md:h-80">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};

export default ChartMessage;
