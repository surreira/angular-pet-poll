import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Answer {
  type?: string | null,
  name?: string | null,
  expense?: string | null,
};

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  private answersSource = new BehaviorSubject<Answer>({
    type: "",
    name: "",
    expense: "",
  });
  answers = this.answersSource.asObservable();

  constructor() { }

  setAnswers(answer: Answer) {
    this.answersSource.next(answer);
  }
}
