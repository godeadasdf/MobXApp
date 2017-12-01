import {observable,computed} from 'mobx';

export default class addNum {
  @observable num = 0;

  @computed get total() {
    return this.num * 2;
  }

  addNum = () => {
    this.num += 1;
  };
}