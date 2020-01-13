import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
 
      columnDefs: [
        { headerName: "PI NUMBER", field: "number" , sortable: true, filter: true},
        { headerName: "PI TITLE", field: "title" , sortable: true, filter: true},
        { headerName: "DESCRIPTION", field: "description" , sortable: true, filter: true},
        { headerName: "INDICATION", field: "indication" , sortable: true, filter: true},
        { headerName: "PROJECT STATE", field: "state" , sortable: true, filter: true},
        { headerName: "PI OVERALL STATUS", field: "status" , sortable: true, filter: true},
      ],
      rowData: [
        { number: "PI01", title: "PIName01", description: "Description01" ,indication:"Herbicides",state:"CP-D-Development",status:"Completed"},
        { number: "PI02", title: "PIName02", description: "Description02" ,indication:"Herbicides",state:"CP-D-Feasibility",status:"Pending"},
        { number: "PI03", title: "PIName03", description: "Description03" ,indication:"Herbicides",state:"CP-D-Evaluation",status:"Completed"},
        { number: "PI04", title: "PIName04", description: "Description04" ,indication:"Herbicides",state:"CP-D-Development",status:"Pending"},
        { number: "PI05", title: "PIName05", description: "Description05" ,indication:"Herbicides",state:"CP-D-Feasibility",status:"Completed"},
        { number: "PI06", title: "PIName06", description: "Description06" ,indication:"Herbicides",state:"CP-D-Evaluation",status:"Pending"},
        { number: "PI07", title: "PIName07", description: "Description07" ,indication:"Herbicides",state:"CP-D-Development",status:"Completed"},
        { number: "PI08", title: "PIName08", description: "Description08" ,indication:"Herbicides",state:"CP-D-Feasibility",status:"Pending"},
        { number: "PI09", title: "PIName09", description: "Description09" ,indication:"Herbicides",state:"CP-D-Evaluation",status:"Completed"},
        { number: "PI10", title: "PIName10", description: "Description10" ,indication:"Herbicides",state:"CP-D-Development",status:"Pending"}
      ]
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{ height: "1000em" , width: "1500em"}}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          
        ></AgGridReact>
      </div>
    );
  }
}

export default Grid;
