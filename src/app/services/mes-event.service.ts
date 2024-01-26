import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const link="http://localhost:3000/event";
@Injectable({
  providedIn: 'root'
})


export class MesEventService {

  private events: Event [];
  private event!:Event;
  
  constructor(private http :HttpClient  ) {

    this.events =[
      new Event(  1,"culture event","Music",new Date(2024, 11, 12),"dj X","Event adress 1 ",0,18,false,"white",15,"manouba","affiche1","acccepte"),
      new Event(  2,"culture event2","Music",new Date(2024, 11, 12),"dj X","Event adress 2",200,18,false,"white",15,"manouba","affiche2","acccepte"),
      new Event(  3,"culture event3","Music",new Date(2024, 11, 12),"dj X","Event adress 3",200,18,false,"white",15,"manouba","affiche5","refuse"),
      new Event(  4,"culture event","Music",new Date(2024, 11, 12),"dj X","Event adress 1 ",200,18,false,"white",15,"manouba","affiche4","acccepte"),
      new Event(  5,"culture event2","Music",new Date(2024, 11, 12),"dj X","Event adress 2",200,18,true,"white",15,"manouba","affiche6","en attente"),
      new Event(  6,"culture event3","Music",new Date(2024, 11, 12),"dj X","Event adress 3",200,18,false,"white",15,"manouba","affiche3","refuse"),

  
    ];
   }
   getEvents():Event[]
   {

    return this.events ;

   }
   /*
   getEvents():Observable<Event[]>
   {

    return this.events ;
    return this.http.get<Event[]>(link+"/myEvents");

   }*/
  getEventById(id: number): Event  {

      return this.events.find(p => p.id == id) || new Event(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
    
   
}


  deleteEvent(id: number):Observable<any> {
    return this.http.delete(link+id);
  
  }
}
