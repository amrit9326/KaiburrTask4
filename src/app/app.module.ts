import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { DeletedataComponent } from './deletedata/deletedata.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

import {Router,Routes, RouterModule} from "@angular/router";
import { InsertdataComponent } from './insertdata/insertdata.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
const appRoutes:Routes=[
  {
    path:'viewdata',
    component:ViewdataComponent
  },
  {
    path:'insertdata',
    component:InsertdataComponent
  },
  {
    path:'',
    component:DeletedataComponent
   
  }

];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DeletedataComponent,
    ViewdataComponent,
    InsertdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
