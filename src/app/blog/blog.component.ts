import { Component, OnInit } from '@angular/core';

import { DonorService } from '../service/donor.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
news_arr1:any[]=[];
i:number;
  constructor(private _newsser:DonorService) { }

  ngOnInit(): void {
    this._newsser.getnews().subscribe(
      (data:any)=>
      {
        console.log(data);
        for(this.i=0;this.i<5;this.i++)
        {
          this.news_arr1[this.i]=data.articles[this.i];
        }
        console.log(this.news_arr1);
      }
    )
  }

}
