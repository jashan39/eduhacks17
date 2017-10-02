import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Lesson, LessonService }  from './lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons$: Observable<Lesson[]>;
  private selectedId: number;
  constructor(
    private service: LessonService,
    private route: ActivatedRoute
  ) {}

  lessonImages:any = {
    1: '../../assets/images/sun.png',
    2: '../../assets/images/mercury.png',
    3: '../../assets/images/venus.png',
    4: '../../assets/images/planet-earth.png',
    5: '../../assets/images/mars.png',
    6: '../../assets/images/jupiter.png',
    7: '../../assets/images/saturn.png',
    8: '../../assets/images/uranus.png',
    9: '../../assets/images/neptune.png'
  };

  ngOnInit() {
    this.lessons$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getLessons();
      });
  }

}
