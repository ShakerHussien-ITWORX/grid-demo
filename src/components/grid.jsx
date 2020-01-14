import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import Like from "./like";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: this.createColumnDefs(),

      rowData: [
        {
          star: <Like liked={true} />,
          number: "PI01",
          title: "PIName01",
          description: "Description01",
          indication: "Herbicides",
          state: "CP-D-Development",
          status: "Completed"
        },
        {
          number: "PI02",
          title: "PIName02",
          description: "Description02",
          indication: "Herbicides",
          state: "CP-D-Feasibility",
          status: "Pending"
        },
        {
          number: "PI03",
          title: "PIName03",
          description: "Description03",
          indication: "Herbicides",
          state: "CP-D-Evaluation",
          status: "Completed"
        },
        {
          number: "PI04",
          title: "PIName04",
          description: "Description04",
          indication: "Herbicides",
          state: "CP-D-Development",
          status: "Pending"
        },
        {
          number: "PI05",
          title: "PIName05",
          description: "Description05",
          indication: "Herbicides",
          state: "CP-D-Feasibility",
          status: "Completed"
        },
        {
          number: "PI06",
          title: "PIName06",
          description: "Description06",
          indication: "Herbicides",
          state: "CP-D-Evaluation",
          status: "Pending"
        },
        {
          number: "PI07",
          title: "PIName07",
          description: "Description07",
          indication: "Herbicides",
          state: "CP-D-Development",
          status: "Completed"
        },
        {
          number: "PI08",
          title: "PIName08",
          description: "Description08",
          indication: "Herbicides",
          state: "CP-D-Feasibility",
          status: "Pending"
        },
        {
          number: "PI09",
          title: "PIName09",
          description: "Description09",
          indication: "Herbicides",
          state: "CP-D-Evaluation",
          status: "Completed"
        },
        {
          number: "PI10",
          title: "PIName10",
          description: "Description10",
          indication: "Herbicides",
          state: "CP-D-Development",
          status: "Pending"
        }
      ]
    };
  }

  createColumnDefs() {
    return [
      {
        headerName: "",
        field: "star",
        width: 90,
        cellRenderer: params => {
          let element = '<i class="fa fa-star';
          element += params.liked
            ? ' fa-lg" aria-hidden="true" />'
            : '-o fa-lg" aria-hidden="true" />';
          //console.log(element)
          return element;
        }
      },
      {
        headerName: "PI NUMBER",
        field: "number",
        width: 150,
        cellRenderer: params => {
          let element = `<a href="http://www.google.com">${params.value}</a>`;

          return element;

          // var link = document.createElement("a");
          // link.href = "#";
          // link.innerText = params.value;
          // link.addEventListener("click", e => {
          //   e.preventDefault();
          //   console.log(params.data.id);
          // });
          // return link;
        },
        sortable: true,
        filter: true
      },
      {
        headerName: "PI TITLE",
        field: "title",
        width: 150,
        sortable: true,
        filter: true
      },
      {
        headerName: "DESCRIPTION",
        field: "description",
        width: 150,
        sortable: true,
        filter: true
      },
      {
        headerName: "INDICATION",
        field: "indication",
        width: 150,
        sortable: true,
        filter: true
      },
      {
        headerName: "PROJECT STATE",
        field: "state",
        width: 150,
        sortable: true,
        filter: true
      },
      {
        headerName: "PI OVERALL STATUS",
        field: "status",
        width: 200,
        sortable: true,
        filter: true
      }
    ];
  }
  render() {
    return (
      <div
        className="ag-theme-blue"
        style={{ height: "1000em", width: "1500em" }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          gridOptions={{ Like: "Like" }}
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;
