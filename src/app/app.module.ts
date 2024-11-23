import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"rfid-project-98dbe","appId":"1:250885324292:web:08bb35ec2d5f218d287f51","databaseURL":"https://rfid-project-98dbe-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"rfid-project-98dbe.firebasestorage.app","apiKey":"AIzaSyD3EPacwNJp7zJlZ1ZO_2ZfpfFzBceY49U","authDomain":"rfid-project-98dbe.firebaseapp.com","messagingSenderId":"250885324292"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
