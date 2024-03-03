import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private forgotForm: FormBuilder, private dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  forgotPassword = this.forgotForm.group({
    userEmail: ["", [Validators.required]],
    userPassword: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]]
  })

  get email() { return this.forgotPassword.get("userEmail"); }
  get password() { return this.forgotPassword.get("userPassword"); }

  @Output()
  forgotPasswordSubmit: EventEmitter<any> = new EventEmitter<any>();


  onSubmit() {
    const forgotData = this.forgotPassword.value;
    this.forgotPasswordSubmit.emit(forgotData);
    this.dialogRef.close();
  }


  onCancel() {
    this.dialogRef.close();
  }
}
