import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { QueryService } from 'src/app/services/query.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-ad-main',
  templateUrl: './ad-main.component.html',
  styleUrls: ['./ad-main.component.css']
})
export class AdMainComponent implements OnInit {

  constructor(private orderService: OrderService,
    private productService: ProductService,
    private registerService: RegisterService,
    private querryService: QueryService) { }

  totalOrder: any = "";
  totalProduct: any = "";
  totalUsers: any = "";
  totalQueries: any = "";

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe((data)=>{
      this.totalOrder = data.length;
    });

    this.registerService.getAllUser().subscribe((data) => {
      this.totalUsers = data.length;
    });

    this.productService.getAllMenus().subscribe((data) => {
      this.totalProduct = data.length;
    });

    this.querryService.getQuery().subscribe((data) => {
      this.totalQueries = data.length;
    })

  }

}
