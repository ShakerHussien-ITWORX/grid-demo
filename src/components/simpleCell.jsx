import React from "react";

import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Like from "./like";

var columnDefs = [
  { field: "athlete" },
  { field: "country" },
  { field: "year", width: 100 },
  { field: "gold", width: 100, cellRenderer: "like" },
  { field: "silver", width: 100, cellRenderer: "like" },
  { field: "bronze", width: 100, cellRenderer: "like" },
  { field: "total", width: 100 }
];

var rowData = [
  {
    athlete: "shaker",
    country: "burkina faso",
    year: "1993",
    gold: <Like liked={true} />,
    silver: <Like liked={false} />,
    bronze: <Like liked={true} />,
    total: "1999"
  },
  {
    athlete: "shaker2",
    country: "burkina faso",
    year: "1993",
    gold: true,
    silver: false,
    bronze: true,
    total: "1999"
  }
];


export default function simpleCell() {
  return (
    <div
      className="ag-theme-balham"
      style={{ height: "200px", width: "1200px" }}
    >
      <AgGridReact rowData={rowData}>
        {columnDefs.map((col, i) => {
          return (
            <AgGridColumn
              field={col.field}
              width={col.width}
              headerName={col.field}
              pinned
              cellRenderer={col.cellRenderer ? Like : ""}
            />
          );
        })}
      </AgGridReact>
    </div>
  );
}
