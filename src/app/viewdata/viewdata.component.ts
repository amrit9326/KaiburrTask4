import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Server} from "C:/Users/Amrit singh/Desktop/JavaWork/kaiburrtask4/src/app/model/server";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {
  sid:number;
  servers:Server[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.sid=0;
    this.getAll();
  }

  public getAll(){
    let url="http://localhost:8080/server/";
    this.http.get<Server[]>(url).subscribe(
      res =>
      {
         this.servers=res;
         console.log(this.servers);
      },
      err=>
      {
           alert("some error occured");
          
      }
    );
  }
  delete() :Observable<any> {
    let url="http://localhost:8080/server/";
    return this.http.delete(`${url}/${this.sid}`,{ responseType: 'text' });
  }

  public deleteServer(sid:number)
  {
    this.sid=sid;
    this.delete().subscribe(
      res=>
      {
        
        
        this.sid=0;
        location.reload();
      },
      err=>
      {
        console.log(err);
      }
    );
  }

}
