import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationBarComponent } from './components/destination/destination-bar/destination-bar.component';
import { CrewComponent } from './components/crew/crew.component';
import { CrewCarouselComponent } from './components/crew/crew-carousel/crew-carousel.component';
import { TechComponent } from './components/tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DestinationComponent,
    DestinationBarComponent,
    CrewComponent,
    CrewCarouselComponent,
    TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
