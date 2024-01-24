import { Component, NgModule, OnInit } from '@angular/core';
import { MesEventService } from '../../services/mes-event.service';
import { Event } from '../../model/event';

@Component({
  selector: 'app-mes-event',
  templateUrl: './mes-event.component.html',
  styleUrls: ['./mes-event.component.css']
}
)

export class MesEventComponent implements OnInit {
  events:Event [];
  
  constructor( mesEventService:MesEventService) {
    this.events=mesEventService.getEvents();
    
  }

  ngOnInit(): void {
    
    
  }

}
