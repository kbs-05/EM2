import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EILComponent } from './eil/eil.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DAComponent } from './da/da.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { BSComponent } from './bs/bs.component';
import { IEJComponent } from './iej/iej.component';
import { IACComponent } from './iac/iac.component';
import { ESLComponent } from './esl/esl.component';
import { IASAComponent } from './iasa/iasa.component';
import { EDComponent } from './ed/ed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },// Redirection explicite
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'da', component: DAComponent},
  {path:'faq', component:FaqComponent},
  {path:'contact', component:ContactComponent},
  {path:'eil', component: EILComponent},
  {path:'bs', component: BSComponent},
  {path:'iej', component: IEJComponent},
  {path:'iac', component:IACComponent},
  {path:'esl', component: ESLComponent},
  {path:'iasa', component: IASAComponent},
  {path:'ed', component: EDComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
