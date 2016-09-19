import { Injectable } from '@angular/core';

export type InteralStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InteralStateType = { };

  constructor() {

  }

  // 总是返回一个最新的state
  get state() {
    return this._state = this._clone(this._state);
  }
  // state不允许变化， 改变state直接抛出异常
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // 永远使用克隆的对象
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : null;
  }

  set(prop: string, value: any) {
    // 改变state的内部属性
    return this._state[prop] = value;
  }


  private _clone(object: InteralStateType) {
    // 简单的克隆对象
    return JSON.parse(JSON.stringify( object ));
  }
}
