import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { AwardsComponent } from './awards/awards.component';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'awards', component: AwardsComponent },
  {path: '**', redirectTo: 'dashboard'}
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
