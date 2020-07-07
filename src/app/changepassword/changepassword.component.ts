import { Component, OnInit } from '@angular/core';
import { donor } from '../classes/donor';
import { DonorService } from '../service/donor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  password:string;
  oldpassword:string;
newpassword:string;
renewpassword:string;
donor_email:string;
donor_arr:donor[]=[];
  constructor(private _donor:DonorService,private _route:Router) { }
onDone()
{
  if(this.password==this.oldpassword)
  {
    if(this.newpassword==this.renewpassword)
    {
      this._donor.ChangePassword(new donor(this.donor_email,this.newpassword)).subscribe(
        (data:any)=>
        {
          console .log(data);
          alert('Password Changed Succesfully.');
          this._route.navigate(['viewprofile']);
        }
      );
    }
    else
    {
      alert('new password and confirm password must- be same');
    }
  }
  else
  {
    alert('incorrect old password');
  }

}
onCancel()
{}

  ngOnInit(): void {
  this.donor_email=localStorage.getItem('donor_email');
  this._donor.getPasswordById(this.donor_email).subscribe(
    (data:donor[])=>{
     this.donor_arr=data;
    this.password=data[0].donor_password;
    });
 
}

}
