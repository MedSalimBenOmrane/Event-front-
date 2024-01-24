
export class Event {
    id :number;
    
    eventName:string;
    type:string;
    date:Date;
    lineupNames:string;
    eventAddress:string;
    capacity:number;
    age:number;
    alcool:boolean;
    dressCode:string;
    price:number;
    sellPoints:string;
    affiche:string;
    status:string;
  
    constructor(id=0,eventName="",type="",date = new Date(),lineupNames="",eventAddress="",capacity=0,age=0,alcool=false,dressCode="",price=0,sellPoints="",affiche="",status="" ) {
      this.id =id
      this.eventName=eventName;
      this.type=type;
      this.date=date;
      this.lineupNames=lineupNames;
      this.eventAddress=eventAddress;
      this.capacity=capacity;
      this.age=age;
      this.alcool=alcool;
      this.dressCode=dressCode;
      this.price=price;
      this.sellPoints=sellPoints;
      this.affiche=affiche;
      this.status=status;
    }
  
  }