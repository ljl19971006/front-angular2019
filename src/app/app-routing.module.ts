import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { CounterdetailsComponent }  from './counterdetails/counterdetails.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: 'counter/:id', component: CounterdetailsComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }