import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiStepFormComponent,
    SummaryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "summary", component: SummaryComponent },
      { path: "", component: HomeComponent },
    ]),
BrowserAnimationsModule,
  ReactiveFormsModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule,
  MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
