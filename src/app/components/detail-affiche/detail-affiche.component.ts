import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { Router } from '@angular/router';
import { MesEventService } from 'src/app/services/mes-event.service';

@Component({
  selector: 'app-detail-affiche',
  templateUrl: './detail-affiche.component.html',
  styleUrls: ['./detail-affiche.component.css']
})
export class DetailAfficheComponent  implements OnInit {
  @Input() event!:Event
  @Input() showStatus=true;
  bgcolor!:string;
  constructor(private router:Router,
              private mesEvent:MesEventService){
   /* if(this.event.status=="acccepte")
    {this.bgcolor="green";}
    else if(this.event.status=="en attente")
    {this.bgcolor="orange";}
    else if(this.event.status=="refuse")
    {this.bgcolor="red";}

*/
  }
  ngOnInit(): void {
    if(this.event.status=="acccepte")
    {this.bgcolor="green";}
    else if(this.event.status=="en attente")
    {this.bgcolor="orange";}
    else if(this.event.status=="refuse")
    {this.bgcolor="red";}


  }

  modifier() {
    const link=['user/modifier', this.event.id];
    this.router.navigate(link);
  }

  delete(id:number):void{
    this.mesEvent.deleteEvent(id);

  }


}
