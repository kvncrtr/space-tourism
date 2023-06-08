import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from '../app/components/home/home.component';
import { DestinationComponent } from '../app/components/destination/destination.component';
import { CrewComponent } from '../app/components/crew/crew.component';
import { TechComponent } from '../app/components/tech/tech.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'destination', component: DestinationComponent},
  {path: 'crew', component: CrewComponent},
  {path: 'tech', component: TechComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
