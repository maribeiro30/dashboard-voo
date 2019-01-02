import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface  PilotoElement{
  id: number;
  codigo: string;
  nome: string;
}

export interface CidadeElement{
  id: number;
  codigo: string;
  nome: string;
  uf: string;
}

export interface AviaoElement{
  id: number;
  codigo: string;
  descricao: string;
}

export interface VooElement {
  id : number;
  numero: number;
  codigo: number;
  horaSaida: string;
  horaChegada: string;
  status: string;
  piloto: PilotoElement;
  cidadeOrigem: CidadeElement;
  cidadeDestino: CidadeElement;
  aviao: AviaoElement;
}


@Injectable({
  providedIn: 'root'
})


export class ReportVoosService {

  restItems: VooElement[];
  restItemsUrl = 'http://localhost:8081/empresa-aerea/voo';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): void {
    this.restServiceGetVoos()
        .subscribe(
          restItems => {
            this.restItems = restItems;
            console.log(this.restItems);
          },
          error => {
            console.log(error)
          })
  }

  restServiceGetVoos() {
    return this.http
      .get<VooElement[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
