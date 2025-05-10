import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
export const routes: Routes = [
  //Home Routes
  {
    path: '',
    component: HomeComponent,
  },
  //Product Routes
  {
    path: 'product',
    component: ProductComponent,
  },
];
