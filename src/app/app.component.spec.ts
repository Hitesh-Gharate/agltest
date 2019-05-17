import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { PetListComponent } from './user-list/pet-list/pet-list.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrderByPipe } from './order-by.pipe';
import { DataService } from './services-data/data.service';
import { FormHttpService } from './services-data/form-http.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserListComponent,
        PetListComponent,
        OrderByPipe,
        HttpClientTestingModule
      ],
      providers: [DataService, FormHttpService]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
