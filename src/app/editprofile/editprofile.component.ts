import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonorService } from '../service/donor.service';
import { donor } from '../classes/donor';
import { donors } from '../classes/donors';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
donor_email:string;
donor_name:string;
donor_gender:string;
donor_contact:string;
donor_address:string;
donor_PAN_no:string;
donor_arr:donor[]=[];
  updonor_arr:donors[]=[];
  constructor(private _AcRoute:ActivatedRoute,private _donor:DonorService,private _route:Router) { }
onDone()
{
  console.log(this.donor_name);
  console.log(this.donor_contact);
  console.log(this.donor_email);
  this._donor.UpdateDonor(new donors(this.donor_name,this.donor_gender,this.donor_contact,this.donor_address,this.donor_PAN_no,this.donor_email)).subscribe(
    (data:any)=>{
      this.updonor_arr.push(new donors(this.donor_name,this.donor_gender,this.donor_contact,this.donor_address,this.donor_PAN_no,this.donor_email));
            console.log(data);
            alert("record updated succesfully");
            this._route.navigate(['viewprofile']);
           }
   );

}
  onChange(){}

  ngOnInit(): void {
  this.donor_email=this._AcRoute.snapshot.params['donor_email'];
  console.log(this.donor_email);
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
