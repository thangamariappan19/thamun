import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { AppConfig } from '../config/appconfig';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class MasterServices {
  constructor(private http: Http, private config: AppConfig) { }
  
  public getcategories(params: any = {}) {
    return this.http.get(this.config.APIUrl + this.config.categories, { params }).map((response: any) => {
      return response.json();
    });
  }

  public getProducts() {
    return this.http.get(this.config.APIUrl + this.config.products).map((response: any) => {
      return response.json();
    });
  }

  public addCategories(data: any) {
    return this.http.post(`${this.config.APIUrl}${this.config.categories}`, data, null)
      .map(res => {
        return res.json();
      });
  }


  public addProducts(data: any) {
    return this.http.post(`${this.config.APIUrl}${this.config.products}`, data, null)
      .map(res => {
        return res.json();
      });
  }


  public categoryUpdate(data: any) {
    return this.http.put(`${this.config.APIUrl}${this.config.categories}`, data, null)
      .map(res => {
        return res.json();
      });
  }


 //#region Delete Method
 categoryDelete(data: any) {
  let id = data;
  return this.http.put(`${this.config.APIUrl}${this.config.categories}`, data,null)
  //return this.http.put(this.config.APIUrl + 'AffiliationMappingDelete?AffiliationMappingid=' + id, options)
    .map((response: any) => {
      return response.json();
    });
};
  
}