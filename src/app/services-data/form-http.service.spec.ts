import { TestBed } from '@angular/core/testing';

import { FormHttpService } from './form-http.service';

describe('FormHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormHttpService = TestBed.get(FormHttpService);
    expect(service).toBeTruthy();
  });
});
