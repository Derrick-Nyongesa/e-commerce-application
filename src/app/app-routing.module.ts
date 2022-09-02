import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { RetailComponent } from './components/retail/retail.component';

const routes: Routes = [
  { path: 'retail', component: RetailComponent },
  {
    path: '',
    redirectTo: '/retail',
    pathMatch: 'full',
  },
  { path: 'product/:id', component: ProductComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
