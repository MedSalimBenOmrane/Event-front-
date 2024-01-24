import { Component, Input } from '@angular/core';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-item-tickets',
  templateUrl: './item-tickets.component.html',
  styleUrls: ['./item-tickets.component.css']
})
export class ItemTicketsComponent {
  @Input()  event!:Event;
}
