import { NgModule } from "@angular/core";

import { RowComponent } from "./row.component";
import { CommonModule, DatePipe } from "@angular/common";
import * as Material from "@angular/material";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [RowComponent],
    exports: [ RowComponent, Material.MatDialogModule],
    imports: [ CommonModule, Material.MatDialogModule]
})
export class RowModule {}
