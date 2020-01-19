import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { MovieService } from './movie.service';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { OwnerComponent } from './owner/owner.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SubjectwisereportComponent } from './subjectwisereport/subjectwisereport.component';
import { BookwiseReportComponent } from './bookwise-report/bookwise-report.component';
import { FeesorfinereportComponent } from './feesorfinereport/feesorfinereport.component';
import { CheckbookavailableComponent } from './checkbookavailable/checkbookavailable.component';
import { AddnewBookComponent } from './addnew-book/addnew-book.component';
import { AddnewCopyComponent } from './addnew-copy/addnew-copy.component';
import { ReturnBookcopyComponent } from './return-bookcopy/return-bookcopy.component';
import { IssueBookcopyComponent } from './issue-bookcopy/issue-bookcopy.component';
import { ListofBooksComponent } from './listof-books/listof-books.component';
import { EditbookComponent } from './editbook/editbook.component';
import { AddnewmemberComponent } from './addnewmember/addnewmember.component';
import { TakepaymentComponent } from './takepayment/takepayment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { UserpaymentHistoryComponent } from './userpayment-history/userpayment-history.component';
import { UserlistofissuedbooksComponent } from './userlistofissuedbooks/userlistofissuedbooks.component';
import { ListofuserComponent } from './listofuser/listofuser.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



const parentModuleRoutes: Routes = [
  {
    path:'',component:LoginComponent,
  },
  {
    path:'home',component:HomeComponent,children:[{path:'changePassword',component:ChangePasswordComponent}]
  },
  { 
    path:'home',component:HomeComponent,children:[{path:'subjectwise',component:SubjectwisereportComponent}]
  },
  { 
    path:'home',component:HomeComponent,children:[{path:'bookwise',component:BookwiseReportComponent}]
  },
  { 
    path:'home',component:HomeComponent,children:[{path:'owner',component:OwnerComponent}]
  },
  { 
    path:'home',component:HomeComponent,children:[{path:'edit',component:EditProfileComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'feesorfine',component:FeesorfinereportComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'register',component:RegisterComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'checkBookavailability',component:CheckbookavailableComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'newbook',component:AddnewBookComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'newcopy',component:AddnewCopyComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'returnbook',component:ReturnBookcopyComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'issueBook',component:IssueBookcopyComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: 'issuedbooks', component: ListofBooksComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: 'addmember', component: AddnewmemberComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[ { path: 'payment', component: TakepaymentComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path: 'paymenthistoty', component: PaymentHistoryComponent }]
  },
  {
    path:'home',component:HomeComponent,children:[{ path :'userpaymenthistoty',component:UserpaymentHistoryComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'listofissuedBook',component:UserlistofissuedbooksComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'listofuser',component:ListofuserComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'help',component:HelpComponent}]
  },
  {
    path:'home',component:HomeComponent,children:[{path:'search',component:SearchComponent}]
  }
];

@NgModule({
  
  declarations: [
    AppComponent,
    AddMovieComponent,
    MovieListComponent,
    MovieDetailsComponent,
    ContactUsComponent,
    HelpComponent,
    LoginComponent,
    RegisterComponent,
    OwnerComponent,
    EditProfileComponent,
    ChangePasswordComponent,
    SubjectwisereportComponent,
    BookwiseReportComponent,
    FeesorfinereportComponent,
    CheckbookavailableComponent,
    AddnewBookComponent,
    AddnewCopyComponent,
    ReturnBookcopyComponent,
    IssueBookcopyComponent,
    ListofBooksComponent,
    EditbookComponent,
    AddnewmemberComponent,
    TakepaymentComponent,
    PaymentHistoryComponent,
    UserpaymentHistoryComponent,
    UserlistofissuedbooksComponent,
    ListofuserComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(parentModuleRoutes)
    // RouterModule.forRoot([
    //   { path: "", component: LoginComponent},
    //   { path: "home", component: HomeComponent},
    //   // { path: "home", component: AppComponent},
    //   { path: 'changePassword', component: ChangePasswordComponent},
    //   { path: "subjectwise", component: SubjectwisereportComponent},
    //   { path: 'bookwise', component: BookwiseReportComponent },
    //   { path: 'owner', component: OwnerComponent },
    //   { path: 'edit', component: EditProfileComponent },
    //   { path: 'feesorfine', component: FeesorfinereportComponent },
    //   { path: 'movie-details', component: MovieDetailsComponent },
    //   { path: 'contact-us', component: ContactUsComponent },
    //   { path: 'help', component: HelpComponent },
    //   // { path: 'login', component: LoginComponent },
    //   { path: 'register', component: RegisterComponent },
    //   { path: 'checkBookavailability', component: CheckbookavailableComponent },
    //   { path: 'newbook', component: AddnewBookComponent },
    //   { path: 'newcopy', component: AddnewCopyComponent },
    //   { path: 'returnbook', component: ReturnBookcopyComponent },
    //   { path: 'issueBook', component: IssueBookcopyComponent },
    //   { path: 'issuedbooks', component: ListofBooksComponent },
    //   // { path: 'editbook', component: EditbookComponent },
    //   { path: 'addmember', component: AddnewmemberComponent },
    //   { path: 'payment', component: TakepaymentComponent },
    //   { path: 'paymenthistoty', component: PaymentHistoryComponent },
    //   { path :'userpaymenthistoty',component:UserpaymentHistoryComponent},
    //   {path:'listofissuedBook',component:UserlistofissuedbooksComponent},
    //   {path:'listofuser',component:ListofuserComponent}
    // ])
  ],
  exports:[RouterModule],
  providers: [
    MovieService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
