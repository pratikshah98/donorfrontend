import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetComponent } from './forget/forget.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { NopdetailComponent } from './nopdetail/nopdetail.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forget',component:ForgetComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent}, 
   {path:'menu',component:MenuComponent},
   {path:'contact',component:ContactComponent},
   {path:'nopdetail/:nop_name',component:NopdetailComponent},
   {path:'payment',component:PaymentComponent},
   {path:'viewprofile',component:ViewprofileComponent},
   {path:'editprofile/:donor_email',component:EditprofileComponent},
   {path:'changepassword',component:ChangepasswordComponent},
   {path:'about',component:AboutusComponent},
   {path:'blog',component:BlogComponent},
    
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
