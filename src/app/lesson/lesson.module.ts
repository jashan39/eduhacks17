import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LessonComponent } from './lesson.component';
import { LessonDetailComponent } from './lesson-detail.component';

import { LessonService } from './lesson.service';

import { LessonRoutingModule } from './lesson-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LessonRoutingModule
  ],
  declarations: [
    LessonComponent,
    LessonDetailComponent
  ],
  providers: [ LessonService ]
})
export class LessonModule {}