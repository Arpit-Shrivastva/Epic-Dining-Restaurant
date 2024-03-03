import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/Models/register';
import { RegisterService } from 'src/app/services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private formBuiler: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private snackBar: MatSnackBar) { }

  registerForm = this.formBuiler.group({
    firstName: ["", [Validators.required, Validators.minLength(2)]],
    lastName: [""],
    userEmail: ["", [Validators.required]],
    userPassword: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    mobileNumber: ["", [Validators.required, Validators.pattern(/^[6-9]\d{9}$/), Validators.minLength(10), Validators.maxLength(10),]],
    gender: ["", [Validators.required]]
  })

  get firstNameVal() {
    return this.registerForm.get('firstName')
  }

  get lastNameVal() {
    return this.registerForm.get('lastName');
  }

  get userEmailVal() {
    return this.registerForm.get('userEmail');
  }

  get userPasswordVal() {
    return this.registerForm.get('userPassword');
  }

  get mobileNumberVal() {
    return this.registerForm.get('mobileNumber');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  onSubmit() {
    let registerData: Register = this.registerForm.value as unknown as Register;
    this.registerService.registerSaveEndPoint(registerData).subscribe(data => {
      this.snackBar.open('Registration Successful', 'Close', {
        duration: 3000,
      });
      this.router.navigateByUrl("/login");
    })
  }

}
