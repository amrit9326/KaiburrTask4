import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Server} from "C:/Users/Amrit singh/Desktop/JavaWork/kaiburrtask4/src/app/model/server";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deletedata',
  templateUrl: './deletedata.component.html',
  styleUrls: ['./deletedata.component.css']
})
export class DeletedataComponent implements OnInit {
  private url="http://localhost:8080/server/";
  sid:number;
 
  resp:String;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.sid=0;
    this.resp="";
  }
  delete() :Observable<any> {
    
    return this.http.delete(`${this.url}/${this.sid}`,{ responseType: 'text' });
  }

  onSubmitDelete()
  {
    this.delete().subscribe(
      res=>
      {
        
        this.resp=res+"--> "+this.sid;
        this.sid=0;
      },
      err=>
      {
        console.log(err);
      }
    );
  }

}
