import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonComponent } from './lesson.component';
import { LessonDetailComponent } from './lesson-detail.component';

const lessonsRoutes: Routes = [
  { path: 'lesson',  component: LessonComponent },
  { path: 'lesson/:id', component: LessonDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(lessonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LessonRoutingModule { }