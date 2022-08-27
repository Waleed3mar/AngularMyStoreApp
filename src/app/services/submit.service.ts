import { Injectable } from '@angular/core';
import { userInfo } from '../types/userInfo.type';
@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  submtion:userInfo[] = []

  constructor() { }

  checkOut(order:userInfo){
    this.submtion.unshift(order)

  }
  getSubmtion(): userInfo {
    return this.submtion[0]
  }


}
