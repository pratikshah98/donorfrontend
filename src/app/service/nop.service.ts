import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NopService {
  private nop:string="http://localhost:3000/nop/";
  private ngodetailbynopname:string="http://localhost:3000/ngobynopname/";
  private ngo:string="http://localhost:3000/ngo/";
  private ngocontact:string="http://localhost:3000/ngocontactdetail/";
  private api:string="http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-30&sortBy=publishedAt&apiKey=8d125ea257f94837a93dee8d42e37c49";
  constructor(private _http:HttpClient) { }
  getAllNop(){
    return this._http.get(this.nop);
  }
  getNgoDetailByNopName(nop_name){
    return this._http.get(this.ngodetailbynopname+nop_name);
  }
  getNgoDetailByNgoEmailId(ngo_email){
    
    return this._http.get(this.ngo+ngo_email);
  }
  getAllNews()
  {
    return this._http.get(this.api);
  }
  getNgoNopByNgoId(ngo_email){
    return this._http.get(this.nop+ngo_email);
  }

  getNgoContactByNgoId(ngo_email){
    return this._http.get(this.ngocontact+ngo_email);
  }
}
