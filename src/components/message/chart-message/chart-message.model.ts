export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  fill?: boolean;
}

export interface ChartData {
  type: "line" | "bar" | "pie" | "doughnut" | "radar" | "polarArea";
  labels: string[];
  datasets: ChartDataset[];
  title?: string;
  options?: never;
}

export interface ChartProps {
  data: ChartData;
  className?: string;
}
