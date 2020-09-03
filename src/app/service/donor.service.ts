import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { donor } from '../classes/donor';
import { sendmail } from '../classes/sendmail';
@Injectable({
  providedIn: 'root'
})
export class DonorService {
  private donor:string="http://localhost:3000/donor/";
  private forgetpassword:string="http://localhost:3000/forgetpassword/";
  private chanagepassword:string="http://localhost:3000/changepassword/";
  private transaction:string="http://localhost:3000/transaction/";
  private get_news_url:string='https://newsapi.org/v2/top-headlines?q=NGO&apiKey=5c083635b38944afa9b1fe41adbb30d4';
  constructor(private _http:HttpClient) { }
  getLogin(item:donor){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.donor+item.donor_email,body,{headers:head1});
  }
  addDonor(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.donor,body,{headers:head1});
  }
  getPasswordById(donor_email:string){
    return this._http.get(this.donor+donor_email);
  }
  sendMail(item:sendmail){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
  return this._http.post(this.forgetpassword,body,{headers:head1});
  }    
  UpdateDonor(item)
  {
             let body=JSON.stringify(item);
             let head1=new HttpHeaders().set('Content-Type','application/json');
           return this._http.put(this.donor+item.donor_email,body,{headers:head1});

  }
  ChangePassword(item)
  {
       let body=JSON.stringify(item);
       let head1=new HttpHeaders().set('Content-Type','application/json');
     return this._http.put(this.chanagepassword,body,{headers:head1});
  }
  addTransaction(item){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.transaction,body,{headers:head1});
  }
  getnews()
  {
    return this._http.get(this.get_news_url);
  }


}