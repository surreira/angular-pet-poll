import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css']
})
export class MultiStepFormComponent {
  constructor(
    private _answersService: AnswersService,
    private _formBuilder: FormBuilder,
    private _router: Router,
  ) { }

  petTypesList: string[] = [
    "Cat",
    "Dog",
    "Fish",
    "Bird",
  ];

  petExpensesList: string[] = [
    "Less than 20 CHF",
    "Between 20 and 50 CHF",
    "More than 50 CHF",
  ];

  petTypeFormGroup = this._formBuilder.group({
    petType: ['', Validators.required]
  });

  petNameFormGroup = this._formBuilder.group({
    petName: ['', Validators.required]
  });

  petExpenseFormGroup = this._formBuilder.group({
    petExpense: ['', Validators.required]
  });

  handleSubmit(): void {
    if (
      this.petExpenseFormGroup.valid &&
      this.petTypeFormGroup.valid &&
      this.petNameFormGroup.valid
    ) {
      this._answersService.setAnswers({
        type: this.petTypeFormGroup.value.petType,
        name: this.petNameFormGroup.value.petName,
        expense: this.petExpenseFormGroup.value.petExpense,
      });
      this._router.navigate(["/summary"]);
    }
  }
}
