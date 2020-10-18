import { Injectable } from '@angular/core';
import { Headers, HttpModule, RequestOptions, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from '../config/appconfig';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/ie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';
import {customerList} from '../mock-data/categories.list';

@Injectable()
export class MasterServices {
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods,text/plain'
  });
  
  public getcategories() {
    const options = new RequestOptions({ headers: this.headers });
   const  params = new HttpParams()
    .set('page', '2')
    .append('hitsPerPage', '10')
    .set('sort', 'name');
    return this.http.get(this.config.APIUrl + this.config.categories, {
      params: {
        page: '0',
        hitsPerPage: '100'
      }}).map((response: any) => {
      return response.json();
    });
  }
  public addCategories(data:any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.categories}`, data,null)
      .map(res => {
        return res.json();
      });
  }

  
  customerList: any[] = customerList;

  getCategories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.customerList };
        resolve(data);
      }, 2000);
    });
  }

}