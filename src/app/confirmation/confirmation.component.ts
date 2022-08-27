import { Component, OnInit } from '@angular/core';
import { SubmitService } from '../services/submit.service';
import { userInfo } from '../types/userInfo.type';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  
  user: userInfo

  constructor(private submitService:SubmitService) { 
    this.user = {
      name: '',
      address: '',
      card:0,
      total:0
    }
  }

  ngOnInit(): void {
    
    this.user = this.submitService.getSubmtion()
    
    // this.name = this.confirm.name
    // this.address = this.confirm.address
    // this.total = this.confirm.Total
  }


}
