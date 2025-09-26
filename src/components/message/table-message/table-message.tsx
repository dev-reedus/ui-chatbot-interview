import React from "react";
import { TableProps } from "./table-message.model.ts";

const TableMessage: React.FC<TableProps> = ({ data, className = "" }) => {
  if (!data.columns?.length || !data.rows?.length) {
    return (
      <div className="text-gray-400 text-sm p-2">
        There was an error retrieving table data
      </div>
    );
  }

  const cellRender = (value: string | number | Date) => {
    if (value) {
      if (value instanceof Date) {
        return value.toLocaleDateString();
      } else {
        return value.toString();
      }
    } else {
      return "-";
    }
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <div className="text-xl font-semibold mb-2">{data.title}</div>
      <table className="min-w-full bg-white/10 rounded-lg overflow-hidden">
        <thead className="bg-white/20">
          <tr>
            {data.columns.map((column) => (
              <th
                key={column.key}
                className="px-3 py-2 text-xs font-medium text-white uppercase tracking-wider border-b border-white/10 text-left"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {data.rows.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-white/5 transition-colors duration-150"
            >
              {data.columns.map((column) => (
                <td
                  key={column.key}
                  className="px-3 py-2 text-sm text-white text-left"
                >
                  <span>{cellRender(row[column.key])}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableMessage;
