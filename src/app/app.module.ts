import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PersonService } from './person/person.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }