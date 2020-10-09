import { Injectable } from '@angular/core';
import { Headers, HttpModule, RequestOptions, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/appconfig';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/ie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';

@Injectable()
export class TransactionServices {

  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods,text/plain'
  });
//#region Post Method
  AnnouncementCreation(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.categories}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
  HomeworkCreation(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.categories}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
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
  HomeworkUpdation(data: any) {
    const options = new RequestOptions({ headers: this.headers });
    const body = JSON.stringify(data)
    return this.http.put(this.config.APIUrl + 'HomeworkUpdate', body, options).map((response: Response) => {
        return response.json();
    });
  };
  //#endregion
  //#region Get Method
    GetAnnouncementFun(AnnouncementId,SchoolId:any){
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.categories + 'AnnouncementId=' +AnnouncementId+ '&SchoolId=' + SchoolId , options).map((response: Response) => {
      return response.json();
    });
}
GetHomeworkFun(HomeworkId,SchoolId:any){
  const options = new RequestOptions({ headers: this.headers });
  return this.http.get(this.config.APIUrl + this.config.categories + 'HomeworkId=' +HomeworkId + '&SchoolId=' + SchoolId , options).map((response: Response) => {
    return response.json();
  });
}

GetSearchAnnouncement(SchoolId,AffiliationMapId,announcementdate:any){
  const options = new RequestOptions({ headers: this.headers });
  return this.http.get(this.config.APIUrl + this.config.categories + 'SchoolId=' +SchoolId +'&AffiliationMapId=' +AffiliationMapId +'&Date=' +announcementdate, options).map((response: Response) => {
    return response.json();
  });
}
  GetSearchHomework(SchoolId,AffiliationMapId,Grade,Section,Homeworkdate:any){
  const options = new RequestOptions({ headers: this.headers });
  return this.http.get(this.config.APIUrl + this.config.categories +'SchoolId=' +SchoolId +'&AffiliationMapId=' +AffiliationMapId+'&Grade=' +Grade +'&Section=' +Section +'&Date='+Homeworkdate, options).map((response: Response) => {
    return response.json();
  });
}
logout(data: any) {
  const body = JSON.stringify(data)
  return this.http.post(`${this.config.APIUrl}${this.config.categories}`, body, { headers: this.headers })
    .map(res => {
      return res.json();
    });
}; 
//endregion
}