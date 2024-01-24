import { Component, Input } from '@angular/core';
import { Event } from 'src/app/model/event';
import { HomeService } from 'src/app/services/home.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-affichehome',
  templateUrl: './affichehome.component.html',
  styleUrls: ['./affichehome.component.css']
})
export class AffichehomeComponent {
  @Input()  event!:Event;
  events:Event [];
  constructor( homeService:HomeService ) {
    this.events=homeService.getEvents();
  }

}
