import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Answer, AnswersService } from '../answers.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, AfterViewInit {
  answers: Answer = {
    type: null,
    name: null,
    expense: null,
  };

  constructor(
    private _answersService: AnswersService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this._answersService.answers.subscribe((value) => {
      this.answers = value;
    });
  }

  ngAfterViewInit(): void {
    if (!this.answers.type || !this.answers.name || !this.answers.expense) {
      this._router.navigate(["/"]);
    }
  }
}
