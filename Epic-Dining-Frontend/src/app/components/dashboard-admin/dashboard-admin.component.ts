import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product.service';
import { AddNewProductComponent } from '../add-new-product/add-new-product.component';
import { TokenService } from 'src/app/services/token.service';
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {

  constructor(private dialog: MatDialog,
    private productService: ProductService,
    private tokenService: TokenService,
    private authService: AuthServiceService,
    private snackBar: MatSnackBar,
    private router: Router) { }


  showText: boolean = true;

  addItem() {
    const dialogRef = this.dialog.open(AddNewProductComponent);

    dialogRef.componentInstance.addNewItem.subscribe((data) => {
      this.productService.saveMenuWithPhoto(data).subscribe(
        (response) => {
          console.log('Item saved successfully:', response);
          this.snackBar.open('Item saved successfully', 'Close', { duration: 3000 });
        },
        (error) => {
          console.error('Error saving item:', error);
          this.snackBar.open('Error saving item', 'Close', { duration: 3000 });
        }
      );
    });
  }

  logout() {
    this.authService.logout();
    this.tokenService.clearToken();
    this.router.navigateByUrl("");
  }
}