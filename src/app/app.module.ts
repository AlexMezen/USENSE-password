import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
@NgModule({
  declarations: [
    AppComponent,
    PasswordInputComponent,
    PasswordStrengthComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
