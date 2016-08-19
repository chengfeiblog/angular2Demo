import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Item} from '../model/Item';

let roles = [
  {
    permissions : [
      {
        id : 1,
        module: '销售简报',
        method: 'get',
        resource: 'salesReport',
        name: '查询'
      },
      {
        id : 2,
        module: '客户数据',
        method: 'get',
        resource: 'customerData',
        name: '查询'
      },
    ]
  }
];


@Injectable()
export class LoginService{
  private user : Object;
  private permissions : string = null;
  items: Item[];
  private url = '/member';
  constructor(private http: Http) {
  }

  /**
   * 是否登录
   */
  isLoggedIn() : boolean {
    return true;
  }
  /**
   * 获得权限数据
   * @returns {any}
     */
  getPermissions() {
    if(this.permissions) {
      return this.permissions;
    }
    try{
      this.permissions = '';
      for(let i=0;i< roles.length;i++) {
          let role = roles[i];
          for(let j=0;j<role.permissions.length;j++) {
            let p = role.permissions[j];
            this.permissions = this.permissions + ','
            + p.resource.toLowerCase() + "." + p.method.toLowerCase();
          }
      }
      if(this.permissions.indexOf(',')===0) {
        this.permissions = this.permissions.substring(1);
      }
      return this.permissions
    }catch(err) {
      return null;
    }
  }

  /**
   * 验证权限
   */
  hasPermissions(permission: string ): boolean {
      this.permissions = this.getPermissions();
    if(!this.permissions) {
      return false;
    }
    try{
      return this.permissions.indexOf(permission.toLowerCase()) >= 0;
    }catch(err){
      return false;
    }
  }
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
  getHttp() : Promise<Item[]> {
    return this.http.get(this.url)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  /**
   * 按照Id来查询
   */
  getHttpById(id: number): Promise<Item> {
    let url  = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  /**
   * 保存或者编辑
   */
  save(item:Item): Promise<Item> {
    if(item.id) {
      return this.put(item);
    }
    return this.post(item);
  }
  /**
   * 新建
   */
  private post(item:Item):Promise<Item> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
      .post(this.url, JSON.stringify(item), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  /**
   * 编辑
   */
  private put(item:Item) : Promise<Item> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.url}/${item.id}`;

    return this.http
      .put(url, JSON.stringify(item), {headers: headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);

  }
  /**
   * 删除
   */
  delete(item:Item) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url =  `${this.url}/${item.id}`;
    return this.http.delete(url, headers)
      .toPromise()
      .catch(this.handleError);
  }
}
