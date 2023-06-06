import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes } from '@angular/router';
import { ModalCompComponent } from './modal-comp/modal-comp.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  }
]

@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    ModalCompComponent,    
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModuleModule { }
