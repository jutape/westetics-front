import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  faCircleXmark = faCircleXmark;
  wrongPasswordError = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })


  constructor(private router: Router) {
    this.loginForm.valueChanges.subscribe(() => this.wrongPasswordError = false)
  }

  onSubmitLogin(event: Event) {
    if (this.loginForm.invalid) return;
    if (this.loginForm.getRawValue().password === '123')
      this.wrongPasswordError = true;
    else
      this.router.navigate(['/', 'main']);
  }

}
