import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  menus: Product[] = [];
  productId: any;

  ngOnInit(): void {
    this.productService.getAllMenus().subscribe(
      (menus) => {
        this.menus = menus;
        this.productId = menus[0].productId;
      },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    );
  }

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe((data)=>{
      console.log("Prodcut deleted", data);
    })
  }

}
