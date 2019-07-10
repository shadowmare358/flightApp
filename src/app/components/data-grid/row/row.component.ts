import {
    Component,
    Input
} from "@angular/core";
import { IFlight } from "src/app/models/flight.interface";
import { MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: "data-row",
  templateUrl: "./row.component.html",
  styleUrls: ["./row.component.css"]
})
export class RowComponent {
  constructor(private dialog: MatDialog){
  }

    @Input() row: IFlight;
}
