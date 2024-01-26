import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DummyComponent } from './home/dummy/dummy.component';
import { Affiche2Component } from './components/affiche/affiche2.component';
import { DetailAfficheComponent } from './components/detail-affiche/detail-affiche.component';
import { AchatticketComponent } from './pages/achatticket/achatticket.component';
import { ListTicketsComponent } from './MesTickets/list-tickets/list-tickets.component';
import { ItemTicketsComponent } from './MesTickets/item-tickets/item-tickets.component';
import { AffichehomeComponent } from './home/affichehome/affichehome.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { MesEventComponent } from './pages/mes-event/mes-event.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';
import { LogInSignInComponent } from './login_signin/log-in-sign-in/log-in-sign-in.component';
import { ToggleService } from './login_signin/service/toggle.service';
import { AppUserComponent } from './pages/app-user/app-user.component';
import { ModifEventComponent } from './pages/modif-event/modif-event.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
 
    Affiche2Component,
    DetailAfficheComponent,
    AchatticketComponent,
    ListTicketsComponent,
    ItemTicketsComponent,
    AffichehomeComponent,
    CreateEventComponent,
    MesEventComponent,
    FooterComponent,
    Error404Component,
    LogInSignInComponent,
    AppUserComponent,
    ModifEventComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
     MatButtonModule, 
     MatIconModule,
     AppRoutingModule,
     FormsModule,
     ToastrModule.forRoot(),
     HttpClientModule,
     
  ],
  providers: [ToggleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
