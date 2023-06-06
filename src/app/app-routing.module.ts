import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-module/create',
    pathMatch: 'full'
  },
  {
    path: 'user-module',
    loadChildren: ()=>import('./user-module/user-module.module').then(mod=>mod.UserModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
