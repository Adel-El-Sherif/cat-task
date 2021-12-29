import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterCeptor } from './interceptoors/auth-interceptop/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptoors/error-interceptors/error.interceptor';
import { LoaderInterceptor } from './interceptoors/loader/loader.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: authInterCeptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule { }
