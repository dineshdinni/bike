import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"model", component:ModelsComponent},
  {path:"booking",component:BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
