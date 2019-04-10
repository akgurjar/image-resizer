import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'converter',
    loadChildren: './converter/converter.module#ConverterModule'
  },
  {
    path: ':picture',
    loadChildren: './view/view.module#ViewModule'
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
