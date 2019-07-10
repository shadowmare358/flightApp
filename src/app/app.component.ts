import { Component, ViewEncapsulation, Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as papa from 'papaparse';
import {Http} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { IFlight } from './models/flight.interface';
import { RowComponent } from './components/data-grid/row/row.component';
import { ModalComponent } from './modal/modal.component';


@Injectable()

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: [
        "../assets/css/reset.css",
        "../assets/css/fonts.css"
  ]
})
export class AppComponent {
    flightNumber: string;

    constructor(public dialog: MatDialog) {}

    openDialog(): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '250px',
        data: {flightNumber: this.flightNumber}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.flightNumber = result;
      });
    }
    public data: Array<IFlight> = [];
}
