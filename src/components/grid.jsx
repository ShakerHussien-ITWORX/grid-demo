import React, { Component } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

// for community features
import { AllCommunityModules } from "@ag-grid-community/all-modules";

// for enterprise features
//import { AllModules } from "@ag-grid-enterprise/all-modules";

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

      rowData: data,
      columnDefs: this.createColumnDefs(),

      enableSorting: true,
      domLayout: "autoHeight"
    };
  }

  onGridReady = params => {
    this.api = params.api;
    this.columnApi = params.columnApi;
  };

  onQuickFilterText = event => {
    this.setState({ quickFilterText: event.target.value });
  };

  onLike = event => {
    let starClass = event.target.className;
    if (starClass === "fa fa-star-o fa-lg") {
      starClass = "fa fa-star fa-lg";
      event.target.style.color = "#ffd700";
    } else {
      starClass = "fa fa-star-o fa-lg";
      event.target.style.color = null;
    }

    event.target.className = starClass;
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
        width: 200,
        cellRendererFramework: params => {
          return (
            <React.Fragment>
              <i
                className="fa fa-circle"
                aria-hidden="true"
                style={{
                  color: params.value === "Completed" ? "#157254" : "#FF9900"
                }}
              ></i>
              <span style={{ marginLeft: 5 }}>{params.value}</span>
            </React.Fragment>
          );
        }
      }
    ];
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <span>
            Column API:
            <button
              onClick={() => {
                this.columnApi.setColumnVisible("number", false);
              }}
              className="btn btn-primary"
            >
              Hide PI NUMBER Column
            </button>
            <button
              onClick={() => {
                this.columnApi.setColumnVisible("number", true);
              }}
              className="btn btn-primary"
            >
              Show PI NUMBER Column
            </button>
          </span>
        </div>

        <div>
          <label htmlFor="quickFilter">Quick Filter:&nbsp;</label>
          <input
            type="text"
            id="quickFilter"
            onChange={this.onQuickFilterText}
            placeholder="Type text to filter..."
          />
        </div>
        <div style={{ height: 1000, width: 1000 }} className="ag-theme-blue">
          <AgGridReact
            onGridReady={this.onGridReady}
            // binding to simple properties
            quickFilterText={this.state.quickFilterText}
            // binding to array properties
            rowData={this.state.rowData}
            // register all modules (row model, csv/excel, row grouping etc)
            modules={AllCommunityModules}
            // setting default column properties
            defaultColDef={{
              resizable: true,
              sortable: true,
              filter: true
            }}
            // columnDefs={this.state.columnDefs}
            domLayout={this.state.domLayout}
            animateRows={true}
          >
            {this.state.columnDefs.map((col, i) => {
              return (
                <AgGridColumn
                  key={i}
                  field={col.field}
                  width={col.width}
                  headerName={col.headerName}
                  cellRendererFramework={col.cellRendererFramework}
                  pinned
                />
              );
            })}
          </AgGridReact>
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
