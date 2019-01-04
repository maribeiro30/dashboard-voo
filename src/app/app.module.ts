import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTable, MatTableModule, MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
         MatRow, MatRowDef,  MatCell, MatCellDef} from '@angular/material/table'

import { MatPaginator, MatSort, MatTabHeader, MatSortHeader} from '@angular/material'        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportVoosComponent } from './report-voos/report-voos.component';


@NgModule({
  declarations: [
    AppComponent, ReportVoosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
