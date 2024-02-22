import { PageNotFoundComponent } from './../shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { RouterModule, Routes } from '@angular/router';

const carRoutes: Routes = [
  { path: '', component: CarComponent},
]

@NgModule({
  declarations: [
    CarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes)
  ]
})
export class CarModule { }
