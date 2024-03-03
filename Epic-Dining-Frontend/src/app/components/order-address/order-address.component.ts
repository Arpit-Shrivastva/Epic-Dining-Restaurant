import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Address } from 'src/app/Models/address';

@Component({
  selector: 'app-order-address',
  templateUrl: './order-address.component.html',
  styleUrls: ['./order-address.component.css']
})
export class OrderAddressComponent {
  address: Address[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<OrderAddressComponent>
  ) { }

  ngOnInit(): void {
  }
  addressForm = this.formBuilder.group({
    userName: ['', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)],],
    userPincode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)],],
    address: ['', Validators.required],
    cityName: ['', Validators.required],
    stateName: ['', Validators.required],
    country: ['', Validators.required],
  });

  get userName() {
    return this.addressForm.get('userName');
  }

  get mobileNumber() {
    return this.addressForm.get('mobileNumber');
  }

  get userPincode() {
    return this.addressForm.get('userPincode');
  }

  get addressControl() {
    return this.addressForm.get('address');
  }

  get cityName() {
    return this.addressForm.get('cityName');
  }

  get stateName() {
    return this.addressForm.get('stateName');
  }

  get country() {
    return this.addressForm.get('country');
  }

  @Output()
  addressFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  onSubmit(): void {
    const quertData = this.addressForm.value;
    this.addressFormSubmit.emit(quertData);
    this.dialogRef.close();
  }

}
