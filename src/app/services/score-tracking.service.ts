import { Injectable } from '@angular/core';

@Injectable()
export class ScoreTrackingService {

  private score: number = 0;

  getScore(): number {
    return this.score;
  }

  setScore(score: number) {
    this.score = score;
  }

  constructor() { }

}
