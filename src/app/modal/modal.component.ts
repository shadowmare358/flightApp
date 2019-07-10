import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { IFlight } from '../models/flight.interface';
import { DataGridComponent } from '../components/data-grid/data-grid.component';
import { RowComponent } from '../components/data-grid/row/row.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  selected = 'option2';
  results: []
  constructor(
    public dialogRef: MatDialogRef<RowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataGridComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}