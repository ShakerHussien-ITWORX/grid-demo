import React, { Component } from "react";
import { AgGridReact, setQuickFilter } from "ag-grid-react";

let data = [
  {
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
];

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quickFilterText: null,
      gridOptions: {
        api: {},
        columnApi: {},

        columnDefs: this.createColumnDefs(),
        defaultColDef: {
          sortable: true,
          filter: true,
          resizable: true
        },

        rowData: data,

        enableSorting: true,
        domLayout: "autoHeight"
      }
    };
  }

  onGridReady = params => {
    let updatedGridOptions = this.state.gridOptions;

    updatedGridOptions.api = params.api;
    updatedGridOptions.columnApi = params.columnApi;
    updatedGridOptions.api.selectAll();
    this.setState({ gridOptions: updatedGridOptions });
  };

  onQuickFilterText = event => {
    this.setState({ quickFilterText: event.target.value });
  };

  onLike = e => {
    let starClass = e.target.className;
    if (starClass === "fa fa-star-o fa-lg") {
      starClass = "fa fa-star fa-lg";
      e.target.style.color = "#ffd700";
    } else {
      starClass = "fa fa-star-o fa-lg";
      e.target.style.color = null;
    }

    e.target.className = starClass;
  };

  onProjectClicked = params => {
    console.log(`Project ${params.value}`);
  };

  createColumnDefs() {
    return [
      {
        headerName: "",
        field: "star",
        width: 50,

        cellRendererFramework: () => {
          let classes = "fa fa-star-o fa-lg";
          return <i onClick={this.onLike} className={classes} />;
        }
      },
      {
        headerName: "PI NUMBER",
        field: "number",
        width: 150,

        cellRendererFramework: params => {
          return (
            <a href="#" onClick={() => this.onProjectClicked(params)}>
              {params.value}
            </a>
          );
        }
      },
      {
        headerName: "PI TITLE",
        field: "title",
        width: 150
      },
      {
        headerName: "DESCRIPTION",
        field: "description",
        width: 150
      },
      {
        headerName: "INDICATION",
        field: "indication",
        width: 150
      },
      {
        headerName: "PROJECT STATE",
        field: "state",
        width: 150
      },
      {
        headerName: "PI OVERALL STATUS",
        field: "status",
        width: 200
      }
    ];
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          id="quickFilter"
          onChange={this.onQuickFilterText}
          placeholder="Type text to filter..."
        />
        <div
          className="ag-theme-blue"
          style={{ height: "1000em", width: "1500em" }}
        >
          <AgGridReact
            columnDefs={this.state.gridOptions.columnDefs}
            defaultColDef={this.state.gridOptions.defaultColDef}
            rowData={this.state.gridOptions.rowData}
            quickFilterText={this.state.quickFilterText}
            domLayout={this.state.gridOptions.domLayout}
            animateRows={true}
            gridOgtions={this.state.gridOptions}
          ></AgGridReact>
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
