import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { AuthServiceService } from 'src/app/guards/auth-service.service';
import { ProductService } from 'src/app/services/product.service';
import { LoginService } from 'src/app/services/login.service';
import { Cart } from 'src/app/Models/cart';
import { CartService } from 'src/app/services/cart.service';
import { LoginCheckService } from 'src/app/services/login-check.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  product?: Product;
  submitStatus: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private authService: AuthServiceService,
    private loginService: LoginService,
    private cartService: CartService,
    private loginCheck: LoginCheckService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const productName = paramMap.get('productName');

      if (productName) {
        this.productService.getProductByName(productName).subscribe(
          (data) => {
            this.product = data;
            this.submitStatus = false;
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }


  addCart() {
    this.loginService.getUserEmails().subscribe((data) => {
      const loggedInUserEmail = this.loginCheck.getemail();
      
      this.activatedRoute.paramMap.subscribe(paramMap => {
        const productName = paramMap.get('productName');

        if (productName) {

          this.productService.getProductByName(productName).subscribe(
            (product) => {

              const cartItem: Cart = {
                productPhoto: product.productPhoto,
                productName: product.productName,
                productQuantity: '1',
                productDescription: product.productDescription,
                productPrice: product.productPrice,
              };

              const userEmailToSave: string | undefined = this.authService.isLoggedIn ? loggedInUserEmail || undefined : undefined;
              if (userEmailToSave !== undefined) {
                this.cartService.saveCart(userEmailToSave, cartItem).subscribe(
                  (savedCart) => { },
                  (error) => {
                    console.error('Error saving item to cart:', error);
                  }
                );
              }
              if (this.authService.isLoggedIn ?? false) {
                this.router.navigate(['/cart']);
              } else {
                this.router.navigate(['/login']);
              }
            },
            (error) => {
              console.error('Error fetching product:', error);
            }
          );

        }
      });
    })
  }
}
