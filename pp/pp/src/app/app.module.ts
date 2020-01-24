import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';


import { RouterModule,} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { CategorybatComponent } from './categorybat/categorybat.component';
import { CategoryballComponent } from './categoryball/categoryball.component';
import { CategoryglovesComponent } from './categorygloves/categorygloves.component';
import { CategoryshoesComponent } from './categoryshoes/categoryshoes.component';
import { CategoryclothingComponent } from './categoryclothing/categoryclothing.component';
import { LivescoreComponent } from './livescore/livescore.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { AdminComponent } from './admin/admin.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportComponent } from './report/report.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { GetproductComponent } from './getproduct/getproduct.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    DeleteComponent,
    EditComponent,
    RegisterComponent,
    NotfoundComponent,
    LoginComponent,
    CategorybatComponent,
    CategoryballComponent,
    CategoryglovesComponent,
    CategoryshoesComponent,
    CategoryclothingComponent,
    LivescoreComponent,
    CopyrightComponent,
    PrivacyComponent,
    TermsComponent,
    ChangepwdComponent,
    AdminComponent,
    OrdersComponent,
    ReportComponent,
    AddproductComponent,
    CartComponent,
    GetproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    RouterModule.forRoot([
      { path : "", component: LoginComponent },
      { path : "user", component: HomeComponent},
      
      { path : "user", component: HomeComponent,children:[{ path : "contact", component: ContactComponent }]},      
      { path : "user", component: HomeComponent,children:[{ path : "about", component: AboutComponent }]},      
      { path : "user", component: HomeComponent,children:[{ path : "categorybat", component: CategorybatComponent }]},
      { path : "user", component: HomeComponent,children:[{ path : "categoryball", component: CategoryballComponent }]},
      { path : "user", component: HomeComponent,children:[{ path : "categorygloves", component: CategoryglovesComponent }]},
      { path : "user", component: HomeComponent,children:[{ path : "cart", component: CartComponent}]},
      
      { path : "user", component: HomeComponent,children:[{ path : "categoryshoes", component: CategoryshoesComponent }]},
      { path : "user", component: HomeComponent,children:[{ path : "categoryclothing", component: CategoryclothingComponent }]},      
      { path : "user", component: HomeComponent,children:[{ path : "livescore", component: LivescoreComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "addproduct", component: AddproductComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "contact", component: ContactComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "about", component: AboutComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "getproduct", component: GetproductComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "orders", component: OrdersComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "livescore", component: LivescoreComponent }]},
      { path : "admin", component: AdminComponent,children:[{ path : "report", component: ReportComponent }]},
      { path : "admin", component: AdminComponent},   
    
      { path : "register", component: RegisterComponent},   
      { path : "edit/:No", component: EditComponent, canActivate: [AuthService]  },
      { path : "delete/:No", component: DeleteComponent, canActivate: [AuthService]  },
      { path : "categorybat", component: CategorybatComponent},
      { path : "categoryball", component: CategoryballComponent},
      { path : "categorygloves", component: CategoryglovesComponent},
      { path : "categoryshoes", component: CategoryshoesComponent},
      { path : "categoryclothing", component: CategoryclothingComponent},
      { path : "livescore", component: LivescoreComponent},
      { path : "login", component: LoginComponent },
      { path : "privacy", component: PrivacyComponent },
      { path : "about", component: AboutComponent },
      { path : "contact", component: ContactComponent },
      { path : "terms", component: TermsComponent },
      { path : "**", component: NotfoundComponent }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
