import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetListComponent } from './pet-list.component';
import { OrderByPipe } from '../../order-by.pipe';

describe('PetListComponent', () => {
  let component: PetListComponent;
  let fixture: ComponentFixture<PetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetListComponent, OrderByPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
