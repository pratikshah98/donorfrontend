import { Component, OnInit } from '@angular/core';
import { DonorService } from '../service/donor.service';
import { Router } from '@angular/router';
import { donor } from '../classes/donor';
import { CookieService} from 'ngx-cookie-service'; 
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
donor_email:string;
donor_password:string;
rember:boolean;
rember1:boolean;
  constructor(private _donor:DonorService,private _route:Router,private _CookieService:CookieService) { }
  onchange(event)
  {
    // console.log(event);
    // console.log(this.rember)
    // this.rember=event;
  }
  onSubmit(event)
  {

    localStorage.setItem("donor_email",this.donor_email);
    this._CookieService.set('donor_email',this.donor_email)
    this._CookieService.set('donor_password', this.donor_password);  
    this._donor.getLogin(new donor(this.donor_email,this.donor_password)).subscribe((data: any) => {

      console.log(data);
      if (data.length === 1) {
        this._route.navigate(["/menu"]);
      } 
        else {
         // this.rember=true;
         // console.log(event);  
      if(event)
      
          {
            alert("The Email_Id Or the Password is wrong");
    
           this.donor_email=localStorage.getItem('donor_email');

            console.log(this.donor_email);
            console.log(this.donor_password);
          }
          else
          {
            alert("The Email_Id Or the Password is wrong");
          //  f.resetForm();
           
          }
      }
    });
    

  }
  
  addform(f){
    f.resetForm();
   }
  ngOnInit(): void {
  }

}
