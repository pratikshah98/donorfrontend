import { Component, OnInit } from '@angular/core';
import { donor } from '../classes/donor';
import { DonorService } from '../service/donor.service';
import { Router } from '@angular/router';
import { sendmail } from '../classes/sendmail';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  donor_email:string;
  donor_password:string;
  subject:string="About Forget Password";
  constructor(private _donor:DonorService,private _route:Router) { }
  addform(f){
    f.resetForm();
  }
  
  onForget(f){
    console.log(this.donor_email);
  this._donor.getPasswordById(this.donor_email).subscribe(
    (data:donor[])=>{
      console.log(data);
      if(data.length>0)
      {
           this.donor_password=data[0].donor_password;
        this._donor.sendMail(new sendmail(this.donor_email,this.subject,this.donor_password)).subscribe(
          (data:sendmail)=>{
           
           
          }
        )
         alert('password will send on your email');
         this._route.navigate(['/']);

       }
      else{
        alert('Email id is not correct');
        f.resetForm();
      }
    }
  )
}
  ngOnInit(): void {
  }

}
