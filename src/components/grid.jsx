import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

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
      columnDefs: this.createColumnDefs(),

      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true
      },

      rowData: data,

      domLayout: "autoHeight"
    };
  }

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

  onProjectClicked = () => {
    console.log("Project");
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
            <Link
              to={params.path+ params.id}
              onClick={this.onProjectClicked}
            >
              {params.value}
            </Link>
          );
        },

        // var link = document.createElement("a");
        // link.href = "#";
        // link.innerText = params.value;
        // link.addEventListener("click", e => {
        //   e.preventDefault();
        //   console.log(params.data.id);
        // });
        // return link;

        sortable: true,
        filter: true
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

  // onFilterTextBoxChanged(e) {
  //   console.log(e.target);
  //   //setQuickFilter(document.getElementById("filter-text-box").value);
  //   this.setQuickFilter(e.target.value);
  // }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          id="filter-text-box"
          placeholder="Filter..."
          // onInput={this.onFilterTextBoxChanged}
        />
        <div
          className="ag-theme-blue"
          style={{ height: "1000em", width: "1500em" }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            domLayout={this.state.domLayout}
            animateRows={true}
            // quickFilterText={this.onFilterTextBoxChanged}
          ></AgGridReact>
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;
