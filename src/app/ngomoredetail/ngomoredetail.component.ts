import { Component, OnInit } from '@angular/core';
import { NopService } from '../service/nop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ngo } from '../classes/ngo';

@Component({
  selector: 'app-ngomoredetail',
  templateUrl: './ngomoredetail.component.html',
  styleUrls: ['./ngomoredetail.component.css']
})
export class NgomoredetailComponent implements OnInit {
ngo_email:string;
ngodetail_arr:Ngo[]=[];
ngonop_arr:any[]=[];
  constructor(private _ngoService:NopService,private _AcRoute:ActivatedRoute,private _route:Router) { }
  onAddPayment(ngo_email){
    this._route.navigate(['/payment/',ngo_email]);
  }
  ngOnInit(): void {
    this.ngo_email=this._AcRoute.snapshot.params['ngo_email'];
    this._ngoService.getNgoDetailByNgoEmailId(this.ngo_email).subscribe(
      (data:any)=>{
        this.ngodetail_arr=data;
        console.log(this.ngodetail_arr);
        
      });
      this._ngoService.getNgoNopByNgoId(this.ngo_email).subscribe(
        (data:any)=>{
          this.ngonop_arr=data;
          console.log(this.ngonop_arr);
          
        });
   
  }

}
