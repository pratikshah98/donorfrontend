import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NopService {
  private nop:string="http://localhost:3000/nop/";
  private ngodetailbynopname:string="http://localhost:3000/ngobynopname/";
  
  constructor(private _http:HttpClient) { }
  getAllNop(){
    return this._http.get(this.nop);
  }
  getNgoDetailByNopName(nop_name){
    return this._http.get(this.ngodetailbynopname+nop_name);
  }
  
}
