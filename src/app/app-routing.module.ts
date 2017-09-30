import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'student-dashboard', component: DashboardComponent }
  ];

  @NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
