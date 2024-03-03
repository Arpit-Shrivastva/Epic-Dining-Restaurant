import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CanActivateService } from './guards/can-activate.service';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { QueryComponent } from './components/query/query.component';
import { OrderComponent } from './components/order/order.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AdMainComponent } from './components/ad-main/ad-main.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'item/:productName', component: ItemViewComponent },
  {
    path: 'dashboard-admin', component: DashboardAdminComponent, canActivate: [CanActivateService],
    children: [
      { path: 'ad-home', component: AdMainComponent },
      { path: 'all-query', component: QueryComponent },
      { path: 'all-orders', component: OrderComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'profiles', component: ProfilesComponent },
      { path: 'all-address', component: AddressesComponent },
      { path: 'products', component: ProductsComponent }
    ],
  },
  { path: 'dashboard-user', component: DashboardComponent, canActivate: [CanActivateService] },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
