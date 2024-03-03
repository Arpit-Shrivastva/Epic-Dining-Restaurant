import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { LoginCheckService } from 'src/app/services/login-check.service';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthServiceService } from 'src/app/guards/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuiler: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private loginCheck: LoginCheckService,
    private tokenGenerate: TokenService,
    private snackBar: MatSnackBar,
    private matDialog: MatDialog,
    private authService: AuthServiceService) { }

  loginForm = this.formBuiler.group({
    userEmail: ["", [Validators.required, this.emailValidation]],
    userPassword: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
  })

  get email() { return this.loginForm.get("userEmail"); }
  get password() { return this.loginForm.get("userPassword"); }

  emailValidation(email: AbstractControl) {
    const emailvalue = email.value;
    if (emailvalue.startsWith('0') || emailvalue.startsWith('1') || emailvalue.startsWith('2') || emailvalue.startsWith('3') || emailvalue.startsWith('4') || emailvalue.startsWith('5') || emailvalue.startsWith('6') || emailvalue.startsWith('7') || emailvalue.startsWith('8') || emailvalue.startsWith('9') || !emailvalue.endsWith('gmail.com')) {
      return { invalidemail: true };
    }
    else {
      return null;
    }
  }

  onSubmit() {

    let loginData: Login = this.loginForm.value as Login;
    this.loginCheck.setemail(loginData.userEmail);

    this.loginService.getUsersEndPoint().subscribe((data) => {
      const filterMail = data.filter(
        (dataIn) => dataIn.userEmail === loginData.userEmail && dataIn.userPassword === loginData.userPassword
      );
      if (filterMail.length > 0) {
        this.loginService.loginEndPoint(filterMail[0]).subscribe((data) => {
          this.tokenGenerate.setToken(data);
          this.authService.login();
          this.snackBar.open('Login successful', 'Close', {
            duration: 3000,
          });
          this.router.navigateByUrl("/dashboard-user");
        })
      }
      else if (loginData.userEmail === "arpitshri21@gmail.com") {
        this.authService.login();
        this.snackBar.open('Admin Login successful', 'Close', {
          duration: 3000,
        });
        this.router.navigateByUrl("/dashboard-admin");
      }
      else {
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 3000,
        });
      }
    })
  }


  newPassword() {
    const dialogRef = this.matDialog.open(ForgotPasswordComponent);
    dialogRef.componentInstance.forgotPasswordSubmit.subscribe((data) => {

      this.loginService.forgotEndPoint(data, data.userEmail).subscribe(
        (response) => {
          this.snackBar.open('Password changed successfully', 'Close', {
            duration: 3000,
          });
          dialogRef.close();
        },
        (error) => {
          console.error(error);
          this.snackBar.open('Failed to change password. Please try again.', 'Close', {
            duration: 3000,
          });
          dialogRef.close();
        }
      );
    });
  }

}
