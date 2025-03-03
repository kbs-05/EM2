import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DAComponent } from './da/da.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },// Redirection explicite
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'da', component: DAComponent},
  {path:'faq', component:FaqComponent},
  {path:'contact', component:ContactComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
