import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit{

  constructor(private addresService : AddressService){ }

  address : Address[] = [];
  
  
  ngOnInit(): void {
    this.addresService.getAllUserAddresses().subscribe((data) => {
      this.address = data;
    },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    ) 
  }
}
