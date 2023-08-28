import { TestBed } from '@angular/core/testing';

import { NgxDatetimeService } from './ngx-datetime.service';

describe('NgxDatetimeService', () => {
  let service: NgxDatetimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDatetimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
