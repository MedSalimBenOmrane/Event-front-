import { Component, Input } from '@angular/core';
import { Event } from '../../model/event';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-affiche2',
  templateUrl: './affiche2.component.html',
  styleUrls: ['./affiche2.component.css']
})
export class Affiche2Component {
  @Input()  event!:Event;
  @Input() showDetailsButton: boolean = true;
  constructor(private router:Router){}
  details() {
    const link=['user/achat', this.event.id];
    this.router.navigate(link);
  }
}





