import {
    Component,
    Input
} from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";
 import { Http } from "@angular/http";
 import * as papa from 'papaparse';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: "data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.css"]
})
export class DataGridComponent implements IFlight {
  flightNumber: string;
  scheduledDate: Date;
  originDestination: string;
  registration: string;
  regList: any[] = [];
  constructor(private http: Http, public dialog: MatDialog){
    this.readCsvData();
  }
  private readCsvData(){
    this.http.get('assets/mock-data/mockFlights.csv')
    .toPromise()
    .then(
      data => this.extractData(data),
      err => this.handleError(err)
    );
    this.http.get('assets/mock-data/mockRegistrations.csv')
    .toPromise()
    .then(
      data => this.extractDataReg(data),
      err => this.handleError(err)
    );
  };
  private extractData(res){
    let rows = res['_body'];
    let parsedData = papa.parse(rows).data;
    for(let i = 0 ; i < parsedData.length; i++){
      for(let j = 0; j < 5; j++){
        this.rows.push(parsedData[i][j])
      }
    }
      var chunkLength = 5
      var rowLength = this.rows.length/chunkLength;
      var chunks = [];
      for (var z = 0; z < rowLength; z++) {
          if(chunkLength*(z+1)<=this.rows.length)chunks.push(this.rows.slice(chunkLength*z, chunkLength*(z+1)));
      }
      chunks[0] = ["uniqueid","flightNumber","scheduledDate","originDestination","registration"];
      this.rows = chunks;
      this.convertToArrayOfObjects(this.rows);

    }

private extractDataReg(res){
  let rows = res['_body'];
  let parsedData = papa.parse(rows).data;
  for(let i = 0 ; i < parsedData.length; i++){
      this.regList.push(parsedData[i])
  }
  }
  handleError(err){

  }

    private convertToArrayOfObjects(data) {
      var keys = data.shift(),
          i = 0, k = 0,
          obj = null,
          output = [];

      for (i = 0; i < data.length; i++) {
          obj = {};

          for (k = 0; k < keys.length; k++) {
              obj[keys[k]] = data[i][k];
          }

          output.push(obj);
      }
     this.rows = output;
  }

  openDialog(row): void {
    const cos = "cos";
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {registration: row.registration,flightNumber: row.flightNumber,scheduledDate: row.scheduledDate, list: this.regList},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        row.registration = result;
      }
    });
  }

    @Input() public rows: Array<IFlight>;
    public sampleHeaders = ["flight", "sch. date", "sch.time", "o/d", "registration"];
}
