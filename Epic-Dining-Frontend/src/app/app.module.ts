import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './components/menu/menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EnqueriesComponent } from './components/enqueries/enqueries.component';
import { CanActivateService } from './guards/can-activate.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddNewProductComponent } from './components/add-new-product/add-new-product.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { QueryComponent } from './components/query/query.component';
import { OrderComponent } from './components/order/order.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AdMainComponent } from './components/ad-main/ad-main.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderAddressComponent } from './components/order-address/order-address.component';
import { ProductsComponent } from './components/products/products.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    DashboardAdminComponent,
    ForgotPasswordComponent,
    EnqueriesComponent,
    AddNewProductComponent,
    ItemViewComponent,
    QueryComponent,
    OrderComponent,
    ProfilesComponent,
    AddressesComponent,
    CustomersComponent,
    AdMainComponent,
    CartComponent,
    OrderAddressComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [CanActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
