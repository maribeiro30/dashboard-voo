import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReportVoosService {


  restItems: any;
  restItemsUrl = 'http://localhost:8081/empresa-aerea/';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRestItems();
  }

    // Read all REST Items
    getRestItems(): void {
      this.restItemsServiceGetRestItems()
        .subscribe(
          restItems => {
            this.restItems = restItems;
            console.log(this.restItems);
          }
        )
    }

     // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }

}
