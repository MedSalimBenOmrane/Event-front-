import { Component } from '@angular/core';
import { Event } from '../../model/event';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-achatticket',
  templateUrl: './achatticket.component.html',
  styleUrls: ['./achatticket.component.css']
})
export class AchatticketComponent {
  event!: Event;
  constructor(
    private homeService: HomeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        console.log(params['id']);
       if (params['id']) {
        this.event=this.homeService.getEventById(params['id']);
        } else {
          console.error("ID is undefined");
        }
      }
    );
  }

}
