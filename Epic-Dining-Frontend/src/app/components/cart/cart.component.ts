import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cart } from 'src/app/Models/cart';
import { Order } from 'src/app/Models/order';
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { LoginCheckService } from 'src/app/services/login-check.service';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
import { OrderAddressComponent } from '../order-address/order-address.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartVal: Cart[] = [];
  cartId: any;


  constructor(private cartService: CartService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar,
    private addressService: AddressService,
    private loginService: LoginService,
    private loginCheck: LoginCheckService,
    private authService: AuthServiceService,
    private orderService: OrderService,
    private paymentService: PaymentService) { }


  ngOnInit(): void {
    this.loginService.getUserEmails().subscribe((data) => {
      const loggedInUserEmail = this.loginCheck.getemail();
      const userEmailToSave: string | undefined = this.authService.isLoggedIn ? loggedInUserEmail || undefined : undefined;
      if (userEmailToSave !== undefined) {
        this.cartService.getCartsByUserId(loggedInUserEmail!).subscribe((data) => {
          this.cartVal = data;
        })
      }
    })
  }

  orderItem() {
    this.cartVal.forEach((item) => {
      const order: Order = {
        productName: item.productName,
        totalQuantity: item.productQuantity,
        totalPrice: item.productPrice
      };

      this.loginService.getUserEmails().subscribe((data) => {
        const loggedInUserEmail = this.loginCheck.getemail();
        const userEmailToSave: string | undefined = this.authService.isLoggedIn ? loggedInUserEmail || undefined : undefined;
        if (userEmailToSave !== undefined) {
          this.orderService.saveOrder(userEmailToSave, order).subscribe(
            (orderResponse) => {
              this.snackBar.open('Order successfully placed', 'Close', { duration: 3000 });
            },
            (orderError) => {
              console.error('Error saving order:', orderError);
              this.snackBar.open('Error placing order', 'Close', { duration: 3000 });
            }
          );
        }
      });
    })
    const dialogRef = this.matDialog.open(OrderAddressComponent);
    dialogRef.componentInstance.addressFormSubmit.subscribe((data) => {
      this.addressService.saveUserAddress(data).subscribe(
        (response) => {

        }),
        this.snackBar.open('order successfully', 'Close', { duration: 3000 });
    },
      (error) => {
        console.error('Error ordering:', error);
        this.snackBar.open('Error ordering item', 'Close', { duration: 3000 });
      }
    );
  }

  deleteCart() {
    this.loginService.getUserEmails().subscribe((data) => {
      const loggedInUserEmail = this.loginCheck.getemail();
      this.cartService.getCartsByUserId(loggedInUserEmail!).subscribe((data) => {
        this.cartId = data[0].productName;
        const userEmailToSave: string | undefined = this.authService.isLoggedIn ? loggedInUserEmail || undefined : undefined;
        if (userEmailToSave !== undefined) {
          this.cartService.deleteCartItem(loggedInUserEmail!, this.cartId).subscribe((data) => {
            console.log("deleted");
            window.location.reload();
          })
        }
      })
    })
  }

  calculateTotalPrice(quantity: string, price: string): string {
    const quantityValue = parseFloat(quantity);
    const priceValue = parseFloat(price);

    // Check if quantity and price are valid numbers
    if (!isNaN(quantityValue) && !isNaN(priceValue)) {
      const totalPrice = quantityValue * priceValue;
      // Return the formatted total price as a string
      return totalPrice.toFixed(2);
    } else {
      // Return an error message or handle invalid input
      return 'Invalid input';
    }
  }

}
