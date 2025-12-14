import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Ajouté pour ngModel
import { HttpClientModule } from '@angular/common/http'; // Ajouté pour les requêtes HTTP
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DAComponent } from './da/da.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideImgixLoader } from '@angular/common';
import { environment } from '../environments/environment';
import { EILComponent } from './eil/eil.component';
import { BSComponent } from './bs/bs.component';
import { IEJComponent } from './iej/iej.component';
import { IACComponent } from './iac/iac.component';
import { ESLComponent } from './esl/esl.component';
import { IASAComponent } from './iasa/iasa.component';
import { EDComponent } from './ed/ed.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { IJCLComponent } from './ijcl/ijcl.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DAComponent,
    ContactComponent,
    EILComponent,
    BSComponent,
    IEJComponent,
    IACComponent,
    ESLComponent,
    IASAComponent,
    EDComponent,
    SplashScreenComponent,
    ActualiteComponent,
    IJCLComponent,
    DashboardComponent, // bien ajouté ici
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,           // Pour *ngIf, *ngFor, pipes
    RouterModule.forRoot([]) // Pour routerLink
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideImgixLoader('https://yourdomain.imgix.net'),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}