export interface TableColumn {
  key: string;
  label: string;
}

export interface TableData {
  title: string;
  columns: TableColumn[];
  rows: Record<string, string | number | Date>[];
}

export interface TableProps {
  data: TableData;
  className?: string;
}
