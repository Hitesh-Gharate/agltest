import { Injectable } from '@angular/core';
import { FormHttpService } from './form-http.service';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { DataStore } from './dataStore';
import { UserData } from './user.interface';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new UserData();
  constructor(
    private formService: FormHttpService
  ) { }
  getUserData(): Observable<any> {
    return this.formService.getService().pipe(
      map((response) => {
        this.data = response;
        DataStore.USER_DATA = this.data;
      })
    );
  }
}
