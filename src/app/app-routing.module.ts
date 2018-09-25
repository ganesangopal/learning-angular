import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './page/page.component';
import { TodolistComponent } from './todolist/todolist.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: PageComponent, data: {
      page: 'home'
    }},
    {path: 'about', component: PageComponent, data: {
      page: 'about'
    }},
    {path: 'contact', component: PageComponent, data: {
      page: 'contact'
    }},
    {path: 'todolist', component: TodolistComponent},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}