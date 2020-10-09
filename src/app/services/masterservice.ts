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
import {customerList} from '../mock-data/categories.list';

@Injectable()
export class MasterServices {
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods,text/plain'
  });
  
  // getCategories() {
  //   const options = new RequestOptions({ headers: this.headers });
  //   return this.http.get(this.config.APIUrl + this.config.categories, options).map((response: Response) => {
  //     return response.json();
  //   });
  // }

  
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