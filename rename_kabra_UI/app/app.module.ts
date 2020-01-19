import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HttpHeaders, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { GuardianComponent } from './guardian/guardian.component';
import { LogoutComponent } from './logout/logout.component';
import { LicenseComponent } from './license/license.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { DemolicenseComponent } from './demolicense/demolicense.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RtoofficeComponent } from './rtooffice/rtooffice.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UstatusComponent } from './ustatus/ustatus.component';
import { UserComponent } from './user/user.component';


const parentModuleRoutes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'home',component:HomeComponent,children:[{path:'user',component:UserComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: "profile", component: ProfileComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: "license", component: LicenseComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: "vehicle", component: VehicleComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: "demolicense", component: DemolicenseComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: "ustatus", component: UstatusComponent }]
  },
  // { path: "", component: LoginComponent },
  // { path: "register", component: RegisterComponent },
  // { path: "login", component: LoginComponent },
  // { path: "profile", component: ProfileComponent },
  // { path: "guardian", component: GuardianComponent },
  // { path: "home", component: HomeComponent },
  // { path: "logout", component: LogoutComponent },
  // { path: "license", component: LicenseComponent },
  // { path: "vehicle", component: VehicleComponent },
  // { path: "demolicense", component: DemolicenseComponent },
  // { path: "ustatus", component: UstatusComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    GuardianComponent,
    LogoutComponent,
    LicenseComponent,
    VehicleComponent,
    DemolicenseComponent,
    AboutusComponent,
    RtoofficeComponent,
    AdminComponent,
    ContactusComponent,
    UstatusComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(parentModuleRoutes)
    // RouterModule.forRoot([
    //   { path: "", component: LoginComponent },
    //   { path: "register", component: RegisterComponent },
    //   { path: "login", component: LoginComponent },
    //   { path: "profile", component: ProfileComponent },
    //   { path: "guardian", component: GuardianComponent },
    //   { path: "home", component: HomeComponent },
    //   { path: "logout", component: LogoutComponent },
    //   { path: "license", component: LicenseComponent },
    //   { path: "vehicle", component: VehicleComponent },
    //   { path: "demolicense", component: DemolicenseComponent },
    //   { path: "ustatus", component: UstatusComponent }
    // ])
  ],
  exports:[RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
