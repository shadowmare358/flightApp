import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DataGridModule } from "./components/data-grid/data-grid.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { RowComponent } from './components/data-grid/row/row.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components/data-grid/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 import { ModalComponent } from './modal/modal.component';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DataGridModule,
    HttpClientModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
