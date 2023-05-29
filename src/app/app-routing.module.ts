import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CapaComponent } from './pages/capa/capa.component';

const routes: Routes = [
  {
    path: '',
    component: CapaComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'inicio/noticias/:id',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
