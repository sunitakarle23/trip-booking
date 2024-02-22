import { Component, Input } from '@angular/core';
import { IFlightResults } from '../../models/flight-results';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {  
  @Input() flightDetails!: IFlightResults ;
}
