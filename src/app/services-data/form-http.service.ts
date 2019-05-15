import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormHttpService {
  header: any;
  option: any;
  url = 'http://agl-developer-test.azurewebsites.net/people.json';
  constructor(
    private http: HttpClient,
  ) {
    this.header = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.option = {header: this.header};
   }
   getService(): Observable<any> {
     return this.http.get(this.url, this.option);
   }
}
