import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  orders: Order[] = [];

  ngOnInit(): void {
    this.orderService.getAllOrder().subscribe((data) => {
      this.orders = data;
    })
  }

}
