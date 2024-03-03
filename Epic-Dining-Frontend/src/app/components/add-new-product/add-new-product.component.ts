import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddNewProductComponent>) {

  }

  productForm = this.fb.group({
    category: ['', Validators.required],
    productName: ['', Validators.required],
    productPrice: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    productDescription: ['', Validators.required],
    productPhoto: ['']
  });

  // Getter methods for form controls
  get category() {
    return this.productForm.get('category');
  }

  get productName() {
    return this.productForm.get('productName');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productDescription() {
    return this.productForm.get('productDescription');
  }

  get productPhoto() {
    return this.productForm.get('productPhoto');
  }

  @Output()
  addNewItem: EventEmitter<any> = new EventEmitter<any>();

  onSubmit() {
    const itemData = this.productForm.value;
    this.addNewItem.emit(itemData);
    this.dialogRef.close();
  }
  
  onCancel() {
    this.dialogRef.close();
  }
}
