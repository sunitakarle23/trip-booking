import { TestBed } from '@angular/core/testing';

import { FlightSearchService } from './flight-search.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('FlightSearchService', () => {
  let service: FlightSearchService;
  let mockHttpService: any;

  beforeEach(() => {
    mockHttpService = jasmine.createSpy('HttpClient')
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient
      ]
    });
    service = TestBed.inject(FlightSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
