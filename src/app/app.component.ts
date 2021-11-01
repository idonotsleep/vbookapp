import { Component } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VBookApp';
  items = [];
  show = 1;

 
}
