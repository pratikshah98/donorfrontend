import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonorService } from '../service/donor.service';
import { donor } from '../classes/donor';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  gender_arr:string[]=['male','female'];
  donor_arr:donor[]=[];
  donor_email:string;
  donor_name:string;
  donor_gender:string;
  donor_contact:string;
  donor_address:string;
donor_PAN_no:string;

  constructor(private _route:Router,private _donor:DonorService) { }
 onEdit()
 {
  this._route.navigate(['/editprofile',this.donor_email]);
 }
 onCancel()
 {
  this._route.navigate(['/menu']);
 }
  ngOnInit(): void {
    this.donor_email=localStorage.getItem('donor_email');
    this._donor.getPasswordById(this.donor_email).subscribe(
      (data:donor[])=>{
        this.donor_arr=data;
        this.donor_email=data[0].donor_email;
        this.donor_name=data[0].donor_name;
        this.donor_gender=data[0].donor_gender;
        this.donor_contact=data[0].donor_contact;
        this.donor_address=data[0].donor_address;
        this.donor_PAN_no=data[0].donor_PAN_no;
       
      });
 
  }

}
