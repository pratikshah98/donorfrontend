import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NopService } from '../service/nop.service';
import { nop } from '../classes/nop';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
email:string;
pass:string;
nop_arr:nop[]=[];
  constructor(private _route:Router,private _CookieService:CookieService,private _nopService:NopService) { }
  onlogout()
  {
    this._route.navigate(['/']);
     this .email=this._CookieService.get('donor_email');
     this.pass=this._CookieService.get('donor_password');
     console.log(this.email);
    console.log(this.pass);
    this._CookieService.deleteAll(); 
  }

  onReadMore(nop_name)
  {
    console.log(nop_name);
    this._route.navigate(['/nopdetail/',nop_name]);
  }  
  ngOnInit(): void {
    this .email=this._CookieService.get('donor_email');
    this.pass=this._CookieService.get('donor_password');
    this._nopService.getAllNop().subscribe(
      (data:nop[])=>{
        console.log(data);
        this.nop_arr=data;
        console.log(this.nop_arr);
        
      });
  }

}
