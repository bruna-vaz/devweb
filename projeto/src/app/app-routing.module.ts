import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './views/forum/forum.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  	{
      path:'login',
      component: LoginComponent
    },
    { 
      path: 'forum',
      component: ForumComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
