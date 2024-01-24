import { Component } from '@angular/core';
import { Event } from 'src/app/model/event';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent {
   events:Event [];
  constructor( ticketsService:TicketsService ) {
    this.events=ticketsService.getEvents();
  }
}
