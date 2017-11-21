import { Directive, HostListener, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms/src/model";
import { ValidatorFn } from "@angular/forms/src/directives/validators";
import { Validator } from "@angular/forms/src/forms";
import { NG_VALIDATORS, AbstractControl } from '@angular/forms';


@Directive({
  selector: '[appEmailValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
// Angular recognizes the directive's role in the validation process because the directive
// registers itself with the NG_VALIDATORS provider, a provider with an extensible collection of validators.

// The directive class then implements the Validator interface, so that it can easily integrate with Angular forms.
export class EmailValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = this.emailValidator();
  }

  @HostListener('blur', ['$event.target']) onBlur(control) {
    return this.validator(control); // this.emailValidator();
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.validator(control);
  }

  private emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      let email = control.value;
      if (!email || email.indexOf("@") === -1) {
        return {
          emailDomain: { valid: false }
        }
      }
      let [_, domain] = email.split("@");
      if (domain.toLowerCase() !== "example.com") {
        return {
          emailDomain: { valid: false }
        }
      }
      //  returns either null if the control value is valid or a validation error object.
      return null;
    };
  }
}
