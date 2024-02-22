import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  
  constructor(
    private http: HttpClient
  ) { }

  public getFlightResults(): Observable<any> {
    const url = 'https://mocki.io/v1/577dbe94-a454-4c80-8a8d-89906f78e131';
    return this.http.get(url);
  }
}
