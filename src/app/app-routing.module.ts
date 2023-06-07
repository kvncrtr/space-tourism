import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { HomeComponent } from '../app/components/home/home.component';
import { DestinationsComponent } from '../app/components/destinations/destinations.component';
import { CrewComponent } from '../app/components/crew/crew.component';
import { TechComponent } from '../app/components/tech/tech.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'crew', component: CrewComponent},
  {path: 'tech', component: TechComponent},
  {path: '**',  component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
