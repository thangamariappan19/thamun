import { Injectable } from "@angular/core";
//import { environment } from "../src/environments/environment";
import {
  Headers,
  Http,
  Response,
  URLSearchParams,
  RequestOptions
} from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { AppConfig } from "../config/appconfig";

@Injectable()

export class ApiService {
  constructor(private http: Http, private config: AppConfig) { }

  private setHeaders(): Headers {
    let headersConfig = {
      "Content-Type": "application/json",
      Accept:
        "application/json,Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Allow-Methods",
      Token: this.config.Token
    };
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    //this.helperService.startLoader();
    return this.http
      .post(this.config.APIUrl+path, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .catch(this.formatErrors)
      .map((res: Response) => res.json())
      .finally(() => {
        //this.helperService.stopLoader();
      });
  }

  get(path: string, options?: RequestOptions, token?: string) {
    if (token) {
      return this.http
        .get(this.config.APIUrl+path, { headers: this.setHeaders() })
        .catch(this.catchAuthError(this))
        .map((response: Response) => {
          response.json();
        });
    } else {
      return this.http
        .get(this.config.APIUrl+path)
        .catch(this.catchAuthError(this))
        .map((response: Response) => {
          response.json();
        });
    }
  }

  put(path: string, body: Object = {}) {
    return this.http
      .put(this.config.APIUrl+path, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .catch(this.formatErrors)
      .map((response: Response) => {
        response.json();
      });
  }

  catchAuthError(self: ApiService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        // if not authenticated
        //localStorage.removeItem(token);
        //localStorage.removeItem(appVariables.accessTokenLocalStorage);
        //this.router.navigate([appVariables.loginPageUrl]);
      }
      return Observable.throw(res.json());
    };
  }
}
