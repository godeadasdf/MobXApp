import {observable} from 'mobx';

export default class addNum {
  @observable num = 0;

  addNum = () => {
    this.num += 1;
  };
}