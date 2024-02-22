import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { RouterModule, Routes } from '@angular/router';

const hotelRoutes: Routes = [
  { path: '',  component: HotelComponent },
]

@NgModule({
  declarations: [
    HotelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(hotelRoutes)
  ]
})
export class HotelModule { }
