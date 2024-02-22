import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Airports, FareOptions, Travelers } from '../../flight-constants';
import { Router } from '@angular/router';
import { IFlightSearch } from '../../models/flight-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  protected flightSearchForm!: FormGroup;
  protected departureOptions = Airports;
  protected destinationOptions = Airports;
  protected fareOptions = FareOptions;
  protected travelerOptions = Travelers;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.flightSearchForm = this.fb.group({
      departure: ['', Validators.required],
      destination: ['', Validators.required],
      departureDate: ['', [Validators.required, this.dateValidator]],
      returnDate: ['', [Validators.required, this.dateValidator]],
      travelers: ['', Validators.required],
      flightClass: ['', Validators.required]
    });

    this.setLastSearchCriteria();
  }

  /**
   * @method setLastSearchCriteria
   * @description When previous search available set to the search criteria
   */
  private setLastSearchCriteria(): void{
    const lastSearchCriteria = sessionStorage.getItem("lastSearch");
    
    if (lastSearchCriteria) {
      const lastSearch: IFlightSearch  = JSON.parse(lastSearchCriteria) ;
      this.flightSearchForm.setValue({
        departure: lastSearch.departure,
        destination: lastSearch.destination,
        departureDate: lastSearch.departureDate ,
        returnDate: lastSearch.returnDate ,
        travelers: lastSearch.travelers ,
        flightClass: lastSearch.flightClass 
      });
    }
  }
  /**
   * @method dateValidator
   * @param control 
   * @returns validation if the selected value not matched the requirement
   */
  private dateValidator(control: FormControl): any {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    
    // Check if the selected date is before the current date
    if (selectedDate < currentDate) {
      return { invalidDate: true };
    }

    // Custom validation for setting maximum date (e.g., 1 year from the current date)
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 365);
    if (selectedDate > maxDate) {
      return { maxDateExceeded: true };
    }

    return null;
  }

  /**
   * @method searchFlight
   * @description search the flight result based on search criteria
   */
  protected searchFlight(): void {
    sessionStorage.setItem("lastSearch", JSON.stringify(this.flightSearchForm.value));
    this.router.navigate(['/flight-results']);
  }
}
