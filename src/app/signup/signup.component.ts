import { Component, OnInit } from '@angular/core';
import { DonorService } from '../service/donor.service';
import { Router } from '@angular/router';
import { donor } from '../classes/donor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   donor_email:string;
 donor_password:string;
 donor_name:string;
 donor_gender:string;
 donor_contact:string;
 donor_address:string;
 donor_PAN_no:string;
 donor_arr:donor[]=[];
  constructor(private _donor:DonorService,private _route:Router) { }

  ngOnInit(): void {
  }
  addform(f){
    f.resetForm();
  }

  onaddDonor()
  {
    this._donor.addDonor(new donor(this.donor_email,this.donor_password,this.donor_name,this.donor_gender,this.donor_contact,this.donor_address,this.donor_PAN_no)).subscribe(
      (data:any)=>{
        this.donor_arr.push(new donor(this.donor_email,this.donor_password,this.donor_name,this.donor_gender,this.donor_contact,this.donor_address,this.donor_PAN_no));
        console.log(data);
        alert('record addee succesfully');
        this._route.navigate(['/']);
      }
    );
     
  }


}
