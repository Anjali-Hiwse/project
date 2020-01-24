import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { ShippingdetailsComponent } from './shippingdetails/shippingdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductstockComponent } from './productstock/productstock.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AdminComponent } from './admin/admin.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { HttpClientModule } from '@angular/common/http';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditprofilecustComponent } from './editprofilecust/editprofilecust.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EditprofileComponent,
    CartComponent,
    OrderComponent,
    ProductComponent,
    ShippingdetailsComponent,
    AddproductComponent,
    DeleteproductComponent,
    PaymentComponent,
    ProductstockComponent,
    CustomerdetailsComponent,
    OrderdetailsComponent,
    AdminComponent,
    AboutusComponent,
    ContactusComponent,
    ServicesComponent,
    TermsComponent,
    PrivacyComponent,
    EditproductComponent,
    EditprofilecustComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path : "",component: LoginComponent},
      { path : "user",component: HomeComponent},
      { path : "user",component: HomeComponent,children:[{path:"editprofilecust/:cem",component:EditprofilecustComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"product",component:ProductComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"order",component:OrderComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"cart",component:CartComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"aboutus",component:AboutusComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"contactus",component:ContactusComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"terms",component:TermsComponent}]},
      { path : "user",component: HomeComponent,children:[{path:"privacy",component:PrivacyComponent}]},
      { path : "cart",component: CartComponent},
      { path : "admin",component: AdminComponent},
      { path : "admin",component: AdminComponent,children:[{path:"editprofile/:aem",component:EditprofileComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"addproduct",component:AddproductComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"deleteproduct/:pId",component:DeleteproductComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"productstock",component:ProductstockComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"customerdetails",component:CustomerdetailsComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"orderdetails",component:OrderdetailsComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"aboutus",component:AboutusComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"contactus",component:ContactusComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"terms",component:TermsComponent}]},
      { path : "admin",component: AdminComponent,children:[{path:"privacy",component:PrivacyComponent}]},
      { path : "editprofile", component: EditprofileComponent},
      { path : "home", component : HomeComponent },
      { path : "login" , component: LoginComponent },
      { path : "order" , component: OrderComponent },
      { path : "register" ,  component : RegisterComponent },
      { path : "product" ,  component :ProductComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }