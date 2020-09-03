import { Component, OnInit } from '@angular/core';
import { NopService } from '../service/nop.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nopdetail',
  templateUrl: './nopdetail.component.html',
  styleUrls: ['./nopdetail.component.css']
})
export class NopdetailComponent implements OnInit {
nop_name:string;
ngo_email:string;
i:number;
ngodetail_arr:any[]=[];
ngodetail_arr1:any[]=[];
ngodetail_arr2:any[]=[];
  constructor(private _nopdetailService:NopService,private _acRoute:ActivatedRoute,private _route:Router) { }
  onDonoate(ngo_email)
  {
    console.log(ngo_email);
      this._route.navigate(['/ngomoredetail/',ngo_email]);
  }
 nopdetail()
 {
  this.nop_name=this._acRoute.snapshot.params['nop_name'];
  this._nopdetailService.getNgoDetailByNopName(this.nop_name).subscribe(
    (data:any)=>{
      this.ngodetail_arr=data;
      //this.ngo_email=data[0].ngo_email;
          for(this.i=0;this.i<this.ngodetail_arr.length;this.i++)
          {
            this.ngo_email=data[this.i].ngo_email;
            console.log(this.ngo_email);

            this._nopdetailService.getNgoContactByNgoId(this.ngo_email).subscribe(
              (data1:any)=>{
                //console.log(data1);
                this.ngodetail_arr1=data1;
                console.log(this.ngodetail_arr1);
               //this.ngodetail_arr[this.i].push(data1[this.i]);
                //console.log(this.ngodetail_arr);
              //  this.ngodetail_arr2=this.ngodetail_arr.concat(this.ngodetail_arr1);
               // console.log(this.ngodetail_arr2);
          
              });
  
      
          }
              
    });
  

}
  ngOnInit(): void {
  
    this.nopdetail();
  }
}
