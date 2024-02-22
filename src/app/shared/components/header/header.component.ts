import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { IFlightSearch } from 'src/app/flight/models/flight-search';
import { SharingService } from 'src/app/flight/services/sharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isResultPage: boolean = false;
  lastSearch!: IFlightSearch;
  filterLabel = null;
  constructor(
    private router: Router,
    private sharingService: SharingService
  ) {
    const lastSearchCriteria = sessionStorage.getItem("lastSearch");
    if (lastSearchCriteria) {
      this.lastSearch = JSON.parse(lastSearchCriteria);
    }
  }
  ngOnInit() {
    this.sharingService.sideBarSubject$.subscribe(data => {
      this.filterLabel = data;
    });
  }
  /**
   * @method onBackButtonClick
   * @description go back to previous page
   */
  onBackButtonClick(): void {
    this.sharingService.isSidebarOpen = false;
    if (this.filterLabel) {
      this.filterLabel = null;
      this.router.navigate(['flight-results']);
    } else {
      this.router.navigate(['flight']);
    }
  }

  toggleMenu() {
    
  }
}

