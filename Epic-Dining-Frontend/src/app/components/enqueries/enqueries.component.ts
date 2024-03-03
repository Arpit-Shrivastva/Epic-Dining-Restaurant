import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enqueries',
  templateUrl: './enqueries.component.html',
  styleUrls: ['./enqueries.component.css']
})
export class EnqueriesComponent {

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EnqueriesComponent>) { }

  queryForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobileNumber: ['', Validators.required],
    message: ['', Validators.required],
  });

  get fullName(){ return this.queryForm.get ('fullName')};
  get email(){ return this.queryForm.get ('email')};
  get mobileNumber(){ return this.queryForm.get ('mobileNumber')};
  get message(){ return this.queryForm.get ('message')};

  @Output()
  queryFormSubmit: EventEmitter<any> = new EventEmitter<any>();


  onSubmit() {
    const quertData = this.queryForm.value;
    this.queryFormSubmit.emit(quertData);
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
