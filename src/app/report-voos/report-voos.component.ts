import { Component, OnInit } from '@angular/core';
import { ReportVoosService, VooElement } from './report-voos.service';


@Component({
  selector: 'app-report-voos',
  templateUrl: 'report-voos.component.html',
  styleUrls: [ 'report-voos.component.css'],
  providers: [
    {provide : ReportVoosService, useClass: ReportVoosService}
  ]
})

export class ReportVoosComponent  implements OnInit {

  displayedColumns: string[] = ['status', 'numero', 'cidadeorigem', 'cidadedestino', 'horasaida', 'horachegada' ];
  dataSource : VooElement;

  constructor() { }

  ngOnInit() {
  }

}



