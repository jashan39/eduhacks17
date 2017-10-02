import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AwardsComponent } from './awards/awards.component';
import { ClassesComponent } from './classes/classes.component';
import { ScienceComponent } from './science/science.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent} from './student-list/student-list.component';
import { StarterComponent} from './starter/starter.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
    children: []},
  { path: 'awards', component: AwardsComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'starter', component: StarterComponent},
  { path: '**', redirectTo: 'starter'}
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
