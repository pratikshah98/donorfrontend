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
ngodetail_arr:[]=[];
  constructor(private _nopdetailService:NopService,private _acRoute:ActivatedRoute,private _route:Router) { }
  onDonoate()
  {
      this._route.navigate(['/payment']);
  }
 nopdetail()
 {
  this.nop_name=this._acRoute.snapshot.params['nop_name'];
  this._nopdetailService.getNgoDetailByNopName(this.nop_name).subscribe(
    (data:any)=>{
      this.ngodetail_arr=data;
      console.log(this.ngodetail_arr)
    });
  

}
  ngOnInit(): void {
  
    this.nopdetail();
  }
}
