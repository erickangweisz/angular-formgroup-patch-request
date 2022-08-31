import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomValidators } from './services/custom_validators';
import { FormService } from './services/form_base';


import { MatFormFieldModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatCardModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatSnackBarModule],
  providers: 
  [CustomValidators, 
  FormService],
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
