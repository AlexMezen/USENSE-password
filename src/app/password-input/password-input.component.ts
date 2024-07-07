import { Component, ViewChild, ElementRef, AfterViewInit, forwardRef } from '@angular/core';
import { PasswordStrengthService } from '../password-strength.service';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputComponent),
    multi: true
  }]
})
export class PasswordInputComponent implements ControlValueAccessor, AfterViewInit {
  @ViewChild('passwordInput') passwordInputElement!: ElementRef;

  password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) { }

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.password = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { 
    this.onTouched = fn;
  }

  ngAfterViewInit(): void {
    this.passwordInputElement.nativeElement.focus();
  }

  checkStrength(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.password = input.value;
    this.onChange(this.password);
    this.passwordStrengthService.calculateStrength(this.password);
  }
}
