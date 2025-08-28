import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function validation(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value);
    return result? null : {pattern : {value: control.value}};
  }
}

@Directive({
  selector: '[appValidation]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: ValidationDirective, multi: true
    }
  ]
})
export class ValidationDirective implements Validators {

}
