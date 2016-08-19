import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HomeService {
  private baseUrl = '/saint/homePage';

  constructor(private http:Http) {
  }

  /**
   * 处理错误
   */
  private handleError(error:any) {
    return Promise.reject(error.message || error);
  }

  /**
   * 获得月份数据
   */
  getMonths() {
    let months = [
      {
        month: '01',
        monthStr: "一月数据",
      },
      {
        month: '02',
        monthStr: "二月数据",
      },
      {
        month: '03',
        monthStr: "三月数据",
      },
      {
        month: '04',
        monthStr: "四月数据",
      },
      {
        month: '05',
        monthStr: "五月数据",
      },
      {
        month: '06',
        monthStr: "六月数据",
      },
      {
        month: '07',
        monthStr: "七月数据",
      },
      {
        month: '08',
        monthStr: "八月数据",
      },
      {
        month: '09',
        monthStr: "九月数据",
      },
      {
        month: '10',
        monthStr: "十月数据",
      },
      {
        month: '11',
        monthStr: "十一月数据",
      },
      {
        month: '12',
        monthStr: "十二月数据",
      }
    ];
    return months;
  }

  /**
   * 获得销售简报
   */
  getSalesPresentation(month:string):Promise<any> {
    let url = `${ this.baseUrl}/salesPresentation?monthDate=${month}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => {
          let val = res.json();
          if (!val.success) {
            return Promise.reject('访问失败');
          }
          return val.data;
        }
      )
      .catch(this.handleError);
  }


  
  /**
   * 获得交易客户数据
   */
  getCustomerData() :Promise<any>{
    let url = `${ this.baseUrl}/customerData`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => {
          let val = res.json();
          if (!val.success) {
            return Promise.reject('访问失败');
          }
          return val.data;
        }
      )
      .catch(this.handleError);
  }
  /**
   * 获得交易数据
   */
  getTransactionData(month:string):Promise<any> {
    let url = `${ this.baseUrl}/transactionData?monthDate=${month}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => {
          let val = res.json();
          if (!val.success) {
            return Promise.reject('访问失败');
          }
          return val.data;
        }
      )
      .catch(this.handleError);
  }
}
