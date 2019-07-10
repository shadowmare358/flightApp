import { NgModule } from "@angular/core";

import { DataGridComponent } from "./data-grid.component";
import { GridHeaderModule } from "./header/header.module"
import { RowModule } from "./row/row.module"
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { RowComponent } from './row/row.component';
// import {HttpModule} from '@angular/http';
// import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';
import { ModalComponent } from 'src/app/modal/modal.component';
import { MaterialModule } from './material/material.module';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [DataGridComponent, ModalComponent],
    exports: [ DataGridComponent, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, RowModule,FormsModule, ReactiveFormsModule],
    imports: [ GridHeaderModule, RowModule, CommonModule,  HttpClientModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatInputModule, RowModule, MaterialModule, AutoCompleteModule,FormsModule, ReactiveFormsModule,MatSelectModule],
    providers: [],
    entryComponents: [RowComponent, ModalComponent, DataGridComponent]

})
export class DataGridModule {}
