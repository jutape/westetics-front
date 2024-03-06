import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFormStructure } from '../../models/form.interface';
import { formConfig } from '../../models/form-config';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent {
  formStructure: IFormStructure[] = formConfig;

  dynamicForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    let formGroup: Record<string, any> = {};
    this.formStructure.forEach((control) => {
      let controlValidators: Validators[] = [];

      if (control.validations) {
        control.validations.forEach(
          (validation: {
            name: string;
            validator: string;
            message: string;
          }) => {
            if (validation.validator === 'required')
              controlValidators.push(Validators.required);
            if (validation.validator === 'email')
              controlValidators.push(Validators.email);
            // Add more built-in validators as needed
          }
        );
      }

      formGroup[control.name] = [control.value || '', controlValidators];
    });

    this.dynamicForm = this.fb.group(formGroup);
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }
    }

    return '';
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value);
  }

}
