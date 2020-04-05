import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insertdata',
  templateUrl: './insertdata.component.html',
  styleUrls: ['./insertdata.component.css']
})
export class InsertdataComponent implements OnInit {

  model:Server ={
    sid:0,
    name:'',
    language:'',
    framework:''

  };
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  insert():void{
      let url="http://localhost:8080/server/";
      this.http.put(url,this.model).subscribe(
        res =>{
          alert("successfully data inserted...");
          location.reload();
        },
        err =>{
          alert("An error has occured while sending data...");
          console.log(err);

        }
      );
  }

}

export interface Server{
  sid:number;
  name:string;
  language:string;
  framework:string;

}