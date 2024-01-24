import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../service/toggle.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in-sign-in',
  templateUrl: './log-in-sign-in.component.html',
  styleUrls: ['./log-in-sign-in.component.css']
})
export class LogInSignInComponent implements OnInit {
  constructor(private toggleService: ToggleService, private toastr: ToastrService) {}
  isActive:any ;
  ngOnInit() {
    this.toggleService.isLoginActive$.subscribe((isActive) => {
      this.isActive = isActive;
    });
  }

  toggleLogin() {
    this.toggleService.toggleLogin();
  }

  notif(test:any,message:string):void{
    if (test)
    {this.toastr.error(message);}
  }

}