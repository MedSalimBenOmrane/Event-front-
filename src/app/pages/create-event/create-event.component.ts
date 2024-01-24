import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  selectedFile: File | null = null;

 /* constructor( private toastr: ToastrService) {}*/
  notif(test:any,message:string):void{}/*
    if (test)
    {this.toastr.error(message);}
  }*/

  handleFileInput(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = null;
    }
  }
}
