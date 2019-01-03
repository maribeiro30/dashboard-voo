import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

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
  restItemsUrl = 'http://localhost:8089/empresa-aerea/voo';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

  getRestItems(): Observable<VooElement[]> {
      return this.http.get(this.restItemsUrl).pipe(
        catchError(this.handleError),
        map(this.jsonDataToVoos)
        )
  }

  private handleError(error: any): Observable<any>{
    console.log("Error na requisição=>",error);
    return throwError(error);
  }

  private  jsonDataToVoos(jsonData: any): VooElement[] {
      const voos: VooElement[] =[];
      jsonData.forEach(element => voos.push(element as VooElement))
      return voos;
  }

}
