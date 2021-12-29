import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { IsLoggedInGuard } from "./core/guards/auth/is-logged-in/is-logged-in.guard";

const routes: Routes = [
  {
    path: 'auth',
    canActivate : [AuthGuard],
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate : [IsLoggedInGuard],
    loadChildren: () =>
      import('./pages/layout.module').then((m) => m.LayoutModule), 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
