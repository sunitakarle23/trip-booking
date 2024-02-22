import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./flight/flight.module').then(m => m.FlightModule)},
  { path: 'car', loadChildren: () => import('./car/car.module').then(m => m.CarModule) },
  { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
  { path: 'hotel', loadChildren: () => import('./hotel/hotel.module').then(m => m.HotelModule) },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
