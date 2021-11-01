import { PersonComponent } from './person/person.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'person', component: PersonComponent },
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];
