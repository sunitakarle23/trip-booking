import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';

const activityRoutes: Routes = [
  { path: '', component: ActivityComponent},
]

@NgModule({
  declarations: [
    ActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(activityRoutes)
  ]
})
export class ActivityModule { }
