import { Injectable } from '@angular/core';
import { Headers, HttpModule, RequestOptions, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../_AppConfig/appconfig';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/ie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';

@Injectable()
export class UserServices {
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods,text/plain'
  });

  PlayerCreate(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.CreatePlayer}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
  GetUserLogin(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.UserLogin}`, body, { headers: this.headers })
    .map((response: Response) => {
      return response;
    });
  }; 
  ForgotPassword(data: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.UserForgot + 'Username=' + data.Username)
      .map((response: Response) => {
        return response;
      });
  }
 //#region Delete Method
 AffiliationMappingdelete(data: any) {
  const options = new RequestOptions({ headers: this.headers });
  let id = data;
  return this.http.delete(this.config.APIUrl + 'AffiliationMappingDelete?AffiliationMappingid=' + id, options)
    .map((response: Response) => {
      return response.json();
    });
};
//#endregion
  //#region Put Method
  AnnouncementUpdation(data: any) {
    const options = new RequestOptions({ headers: this.headers });
    const body = JSON.stringify(data)
    return this.http.put(this.config.APIUrl + 'AnnouncementUpdate', body, options).map((response: Response) => {
        return response.json();
    });
  };
    //#region Get Method
    GetAnnouncementFun(AnnouncementId,SchoolId:any){
      const options = new RequestOptions({ headers: this.headers });
      return this.http.get(this.config.APIUrl + this.config.GetAnnouncement + 'AnnouncementId=' +AnnouncementId+ '&SchoolId=' + SchoolId , options).map((response: Response) => {
        return response.json();
      });
  }
  GetHomew
}