/**
 * Created by chengfei on 16/9/19.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HomeService {
    private URL = 'http://wx.51e.com.cn/app/index.php?i=18&c=entry&do=VoteSubmit&m=sxs_vote';
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http:Http) {
    }

    getHomeData():Promise<any> {
        let submitData = {
            "uid":'1111222',
            "openid":'222225',
            "voteid":'6',
            "optioniddata":['176'],
        };
        return this.http
            .post(this.URL, JSON.stringify(submitData), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('请求失败', error);
        return Promise.reject(error.message || error);
    }
}