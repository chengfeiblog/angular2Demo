/**
 * 全局状态管理（state）
 * Created by chengfei on 16/8/25.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class AppState {
    _state = {};

    constructor() {

    }

    // 总是返回一个最新的state
    get state() {
        return this._state = this._clone(this._state);
    }

    // state不允许变化， 改变state直接抛出异常
    set state(value) {
        throw new Error('不能直接改变state');
    }


    get(prop?:any) {
        // 永远使用克隆的对象
        const state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : null;
    }

    set(prop:string, value:any) {
        // 改变state的内部属性
        return this._state[prop] = value;
    }


    _clone(object) {
        // 简单的克隆对象
        return JSON.parse(JSON.stringify(object));
    }
}
