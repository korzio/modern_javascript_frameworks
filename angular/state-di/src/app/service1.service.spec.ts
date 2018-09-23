import { TestBed, inject } from '@angular/core/testing';

import { Service1Service } from './service1.service';

describe('Service1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service1Service]
    });
  });

  it('should be created', inject([Service1Service], (service: Service1Service) => {
    expect(service).toBeTruthy();
  }));
});
