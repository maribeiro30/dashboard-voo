import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportVoosComponent } from './report-voos/report-voos.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, ReportVoosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpModule, JsonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
