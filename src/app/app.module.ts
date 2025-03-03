import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    DAComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideRouter([]), // Remplacez par vos routes si nécessaire
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Initialise Firebase
    provideFirestore(() => getFirestore()), // Provider pour Firestore
    provideAuth(() => getAuth()), // Provider pour l'authentification
    provideStorage(() => getStorage()), // Provider pour le stockage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
