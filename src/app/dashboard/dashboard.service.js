import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonModule } from '@angular/http';

import { AppComponent } from './app.componenr'

@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule,HttpModule, JsonModule],
    declarations: [AppComponent, DashboardComponent],
    bootstrap: [AppComponent]
})
    export class AppModule{}