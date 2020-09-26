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
export class MasterServices {
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods,text/plain'
  });
  //region Get Method
  GetaffiliationFun(AffiliationId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetAffiliation + 'AffiliationId=' + AffiliationId, options).map((response: Response) => {
      return response.json();
    });
  }
  GetBloodGroupFun(BloodGroupId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetBloodGroup + 'BloodGroupId=' + BloodGroupId, options).map((response: Response) => {
      return response.json();
    });
  }
  GetRoleMaster(RoleId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetRole + 'RoleId=' + RoleId, options).map((response: Response) => {
      return response.json();
    });
  }
  GetGenderMaster(GenderId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetGender + 'GenderId=' + GenderId, options).map((response: Response) => {
      return response.json();
    });
  }
  GetAffiliationMapFun(AffiliationMappingId,SchoolId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetAffiliationMapping + 'AffiliationMappingId=' + AffiliationMappingId + '&SchoolId=' + SchoolId, options).map((response: Response) => {
      return response.json();
    });
  }
  GetAffiliationData(SchoolId, Affiliation: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetAffiliationId + 'SchoolId=' + SchoolId + '&Affiliation=' + Affiliation, options).map((response: Response) => {
      return response.json();
    });
  }
  GetDistrictMaster(StateId, District) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetDistrict + 'StateId=' + StateId + '&District=' + District, options).map((response: Response) => {
      return response.json();
    });
  }
  GetStateMst(StateId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetState + 'StateId=' + StateId, options).map((response: Response) => {
      return response.json();
    });
  }
  
  GetAnnouncementType(AnnouncementTypeId: any) {
    const options = new RequestOptions({ headers: this.headers });
    return this.http.get(this.config.APIUrl + this.config.GetAnnouncemenTypeMaster + 'AnnouncementTypeId=' + AnnouncementTypeId, options).map((response: Response) => {
      return response.json();
    });

  }
  //#endregion

  AffiliationMappingCreation(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.AffiliationMappingCreate}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
//#endregion
//#region Put Method
Affiliationupdation(data: any) {
  const options = new RequestOptions({ headers: this.headers });
  const body = JSON.stringify(data)
  return this.http.put(this.config.APIUrl + 'AffiliationUpdate', body, options).map((response: Response) => {
    return response.json();
  });
};
AffiliationMapupdation(data: any) {
  const options = new RequestOptions({ headers: this.headers });
  const body = JSON.stringify(data)
  return this.http.put(this.config.APIUrl + 'AffiliationMappingUpdate', body, options).map((response: Response) => {
    return response.json();
  });
};
//#endregion
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
}