import { Component } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trip-booking';
  public isResultPage: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((routerData) => {
      if (routerData instanceof ResolveEnd) {
        this.isResultPage = routerData.url?.includes('flight-results');
      }
    });
  }
}
