import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  private passwordStrengthSubject: BehaviorSubject<string> = new BehaviorSubject<string>('E');
  public passwordStrength$: Observable<string> = this.passwordStrengthSubject.asObservable();

  calculateStrength(password: string): void{
    let strength: string  = '';
    if (!password) {
      strength = 'E';
    } else if (password.length < 8) {
      strength = 'NE';
    } else {
      let hasLetter = /[a-zA-Z]/.test(password);
      let hasDigit = /\d/.test(password);
      let hasSymbol = /[^a-zA-Z\d]/.test(password);

      if (hasLetter && hasDigit && hasSymbol) {
        strength = 'S';
      } else if (hasLetter && hasDigit || hasLetter && hasSymbol || hasDigit && hasSymbol) {
        strength = 'M';
      } else if (hasLetter || hasDigit || hasSymbol) {
        strength = 'L';
      }
    }
    this.passwordStrengthSubject.next(strength);
  }
}
