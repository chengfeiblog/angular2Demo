import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable
export class SalesService{
  baseUrl = window.location.origin + '/saint/';
  constructor(
    private http: Http
  ){}

  /**
   * 处理错误
   */
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
  /**
   * 查询数据
   */
  getSalesList(query: Object) : Promise<any> {
    let url = this.baseUrl + 'customer/salesReport';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // private post(hero): Promise<Hero> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'});
  //
  //   return this.http
  //     .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

}
