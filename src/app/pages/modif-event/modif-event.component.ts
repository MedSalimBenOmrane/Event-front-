import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/model/event';
import { MesEventService } from 'src/app/services/mes-event.service';

@Component({
  selector: 'app-modif-event',
  templateUrl: './modif-event.component.html',
  styleUrls: ['./modif-event.component.css']
})
export class ModifEventComponent {
  selectedFile: File | null = null;
  event!: Event;
  constructor(
    private MesEventService: MesEventService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params['id']);
       if (params['id']) {
        this.event=this.MesEventService.getEventById(params['id']);
        } else {
          console.error("ID is undefined");
        }
      }
    );
  }

  handleFileInput(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
    } else {
      this.selectedFile = null;
    }
  }

}