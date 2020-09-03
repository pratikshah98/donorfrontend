import { Component, OnInit } from '@angular/core';
import { DonorService } from '../service/donor.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
i:number;
news_arr:any[]=[];
  constructor(private _newsser:DonorService) { }

  ngOnInit(): void {
    
      this._newsser.getnews().subscribe(
        (data:any)=>
        {
          console.log(data);
          for(this.i=0;this.i<3;this.i++)
          {
            this.news_arr[this.i]=data.articles[this.i];
          }
          console.log(this.news_arr);
        }
      )
    }
  

}
