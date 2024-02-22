import { Component, Input } from '@angular/core';
import { IFlightResults } from '../../models/flight-results';

@Component({
  selector: 'app-flight-class',
  templateUrl: './flight-class.component.html',
  styleUrls: ['./flight-class.component.scss']
})
export class FlightClassComponent {
  @Input() flightDetails!: IFlightResults;
    
  constructor() {
    console.log(this.flightDetails)
  }

}
