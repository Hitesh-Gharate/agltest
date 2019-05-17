import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormHttpService } from './form-http.service';

describe('FormHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [FormHttpService]
  }));

  it('should be created', () => {
    const service: FormHttpService = TestBed.get(FormHttpService);
    expect(service).toBeTruthy();
  });
});
