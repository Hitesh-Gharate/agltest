import { Injectable } from '@angular/core';
import { FormHttpService } from './form-http.service';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { DataStore } from './dataStore';
import { UserData } from './user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new UserData();
  baseUrl  = environment.baseUrl;
  constructor(
    private formService: FormHttpService
  ) { }
  getUserData(): Observable<any> {
    const url = this.baseUrl + '/people.json';
    return this.formService.getService(url).pipe(
      map((response) => {
        this.data = response;
        DataStore.USER_DATA = this.data;
      }),
      catchError(this.handleError)
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);

  }
}
