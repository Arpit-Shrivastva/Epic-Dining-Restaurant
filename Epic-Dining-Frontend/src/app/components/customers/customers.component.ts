import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  customer: Login[] = [];

  ngOnInit(): void {
    this.loginService.getUsersEndPoint().subscribe((data) => {
      this.customer = data;
    },
      (error) => {
        console.error('Error fetching profiles:', error);
      }
    )
  }



}
