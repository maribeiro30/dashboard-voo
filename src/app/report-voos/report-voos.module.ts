import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import  { ReportVoosComponent } from '.report-voos.component';

@NgModule({
  declarations: [ReportVoosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CursosComponent
  ]
})

export class ReportVoosModule { }
