import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService) { }

  searchTerm: string = '';
  filteredMenus: any[] = [];
  menus: Product[] = [];

  ngOnInit(): void {
    this.productService.getAllMenus().subscribe(
      (menus) => {
        this.menus = menus;
        this.filteredMenus = menus;
      },
      (error) => {
        console.error('Error fetching menus:', error);
      }
    );
  }

  onSearch() {
    this.filteredMenus = this.menus.filter(item =>
      item.productName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
