import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FlightResultComponent } from './components/flight-result/flight-result.component';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { FlightClassComponent } from './components/flight-class/flight-class.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { SortByComponent } from './components/sortby/sort-by/sort-by.component';
import { FilterByComponent } from './components/filter-by/filter-by.component';

const flightRoutes: Routes = [
  { path: '', redirectTo: 'flight', pathMatch: "full" },
  { path: 'flight', component: SearchComponent},
  { path: 'flight-results', component: FlightResultComponent },
]

@NgModule({
  declarations: [
    SearchComponent,
    FlightResultComponent,
    FlightDetailsComponent,
    FlightClassComponent,
    FormatDatePipe,
    FormatTimePipe,
    SortByComponent,
    FilterByComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(flightRoutes),
  ]
})
export class FlightModule { }
