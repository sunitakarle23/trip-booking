import { SharingService } from './../../services/sharing.service';
import { Component, OnInit } from '@angular/core';
import { FlightSearchService } from '../../services/flight-search.service';
import { IFlightResults, ISegment } from '../../models/flight-results';
import { IFlightSearch } from '../../models/flight-search';

@Component({
  selector: 'app-flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.scss']
})
export class FlightResultComponent implements OnInit{
  protected flightResults: IFlightResults[] = [];
  isSortByClick: boolean = false;
  constructor(
    private flightSearchService: FlightSearchService,
    public sharingService: SharingService
  ) {

  }
  ngOnInit() {
    const lastSearchCriteria = sessionStorage.getItem("lastSearch");
    
    if (lastSearchCriteria) {
      const lastSearch: IFlightSearch = JSON.parse(lastSearchCriteria);
      this.flightSearchService.getFlightResults().subscribe((res) => {
        if (res?.length) {
          this.flightResults = this.filterFlightResults(res, lastSearch);
          localStorage.setItem("flightResults", JSON.stringify(this.flightResults));
          console.log("results", this.flightResults)
        }
      }, err => {
        console.error("Error in fetching result", err);
      });
    }
   
  }

  filterFlightResults(result: IFlightResults[], lastSearch:IFlightSearch ): IFlightResults[] {
    return result.filter((res: IFlightResults) => {
      return res.departureCityCode === lastSearch.departure && res.destinationCityCode === lastSearch.destination;
    })
  }

  onSortClick() {
    this.sharingService.isSidebarOpen = true;
    this.isSortByClick = true;
    this.sharingService.sideBarSubject$.next('sortBY');
  }

  onFilterClick() {
    this.isSortByClick = false;
    this.sharingService.isSidebarOpen = true;
    this.sharingService.sideBarSubject$.next('filterBy');
  }

  onSortFlightResult(option: any) {
    this.sharingService.isSidebarOpen = false;
    switch (option) {
      case 'sortByLongDuration':
        this.flightResults.sort((a, b) => {
          return a.duration - b.duration;
        });
        break;
        case 'sortByShortDuration':
          this.flightResults.sort((a, b) => {
            return  b.duration - a.duration;
          });
        break;
        case 'sortAirlineAsc':
          this.flightResults.sort((a:any, b:any) => {
            return  a.company - b.company;
          });
          break;
      default:
        const result = localStorage.getItem('flightResults');

        if (result) {
          this.flightResults = JSON.parse(result)
        }
        break;
    }
    
  }

  trackResult(index: number, result: any) {
    return result ? result.id : undefined;
  }

  applyFilter(filterOption: any): void {
    this.sharingService.isSidebarOpen = false;
    this.flightResults = this.flightResults.filter((result) => {
        return result.fareOptions.some((fare) => {
          return filterOption[fare.name];
      })
    });
  }
}
