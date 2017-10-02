import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from "./app-routing.module";
import { LessonModule } from './lesson/lesson.module';

import { ScoreTrackingService } from './services/score-tracking.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AwardsComponent } from './awards/awards.component';
import { ClassesComponent } from './classes/classes.component';
import { ScienceComponent } from './science/science.component';
import { SolarSystemComponent } from './solar-system/solar-system.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StarterComponent } from './starter/starter.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClassesComponent,
    SolarSystemComponent,
    ScienceComponent,
    AwardsComponent,
    StudentListComponent,
    StarterComponent
    ],
  imports: [
    BrowserModule,
    LessonModule,
    AppRoutingModule
  ],
  providers: [ScoreTrackingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
