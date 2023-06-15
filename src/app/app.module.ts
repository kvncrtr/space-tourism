import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Modules */ 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';


/* Providers */ 
import { InMemoryDataService } from './in-memory-data.service';
import { SpaceService } from './space.service';

/* Components */ 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechComponent } from './components/tech/tech.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DestinationComponent,
    CrewComponent,
    TechComponent
  ],
  providers: [
    InMemoryDataService, 
    SpaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
