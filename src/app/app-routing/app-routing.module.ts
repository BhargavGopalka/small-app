import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UserFormComponent } from "../user-form/user-form.component";
import {AppComponent} from "../app.component";
import {NavComponent} from "../nav/nav.component";
import {RadioButtonComponent} from "../radio-button/radio-button.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/nav',
    pathMatch: 'full'
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: 'nav/userForm',
    component: UserFormComponent
  },
  {
    path: 'nav/radioButton',
    component: RadioButtonComponent
  },
  {
    path: 'userForm',
    component: UserFormComponent
  },
  {
    path: 'home',
    component: AppComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
