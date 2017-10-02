 import { Component, OnInit, HostBinding } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Lesson, LessonService } from './lesson.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson-detail.component.html',
    styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

    learn: boolean = true;

    lesson$: Observable<Lesson>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: LessonService
    ) { }

    ngOnInit() {
        this.lesson$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
                this.service.getLesson(params.get('id')));
    }

    gotoLessons(lesson: Lesson) {
        let lessonId = lesson ? lesson.id : null;
        // Pass along the lesson id if available
        // so that the lessonList component can select that lesson.
        // Include a junk 'foo' property for fun.
        this.router.navigate(['/lesson', { id: lessonId, foo: 'foo' }]);
    }
}