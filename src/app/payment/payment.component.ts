import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NopService } from '../service/nop.service';
import { nop } from '../classes/nop';
import { DonorService } from '../service/donor.service';
import { transaction } from '../classes/transaction';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
flag:boolean=false;
  donate_from_donor_email:string;
pay_to_ngo_email:string;
transaction_amt:number;
nop_arr:nop[]=[];
ngodetail_arr:[]=[];
trasnaction_arr:transaction[]=[];
fk_nop_name:string;
ngo_name:string;
  constructor(private _route:Router,private _AcRoute:ActivatedRoute,private _nopService:NopService,private _donorService:DonorService)  { }

  ngOnInit(): void {
    this._nopService.getAllNop().subscribe(
      (data:nop[])=>{
        console.log(data);
        this.nop_arr=data;
        console.log(this.nop_arr);
       
      });
      this.donate_from_donor_email=localStorage.getItem('donor_email');
  }
  selectChangeHandler(event)
  {
    //this.fk_nop_name=event.target.value;
      
      console.log(this.fk_nop_name);
      this.flag=true;
      this._nopService.getNgoDetailByNopName(this.fk_nop_name).subscribe(
        (data:any)=>{
          this.ngodetail_arr=data;
          console.log(this.ngodetail_arr)
        });
    
    //console.log(this.ngo_name);
  
  }
  onAddPayment()
  {
    console.log(this.transaction_amt);
    this._donorService.addTransaction(new transaction(this.pay_to_ngo_email,this.donate_from_donor_email,this.transaction_amt)).subscribe(
      (data:any)=>{
        this.trasnaction_arr.push(new transaction(this.pay_to_ngo_email,this.donate_from_donor_email,this.transaction_amt));
        console.log(data);
        alert('record addee succesfully');
        this._route.navigate(['/menu']);
      }
    );
     
  }

  addform(f)
  {}

}
