import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DonorService } from '../service/donor.service';
import { donor } from '../classes/donor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:string;
donor_email:string;
donor_name:string;
pass:string;
donor_arr:donor[]=[];
  constructor(private _CookieService:CookieService,private _route:Router,private _donor:DonorService) { }
  onlogout()
  {
    this._route.navigate(['/']);
    this .email=this._CookieService.get('donor_email');
    this.pass=this._CookieService.get('donor_password');
    console.log(this.email);
    console.log(this.pass);
    this._CookieService.deleteAll(); 
  }
  ngOnInit(): void {
 
    this.donor_email=localStorage.getItem('donor_email');
    this._donor.getPasswordById(this.donor_email).subscribe(
      (data:donor[])=>{
        this.donor_arr=data;
        this.donor_name=data[0].donor_name;
      });
 
 
  }

}
