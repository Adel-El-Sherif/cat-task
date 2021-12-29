import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterCeptor } from './interceptoors/auth-interceptop/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptoors/error-interceptors/error.interceptor';
import { LoaderInterceptor } from './interceptoors/loader/loader.interceptor';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers : [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
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
  ]
})
export class CoreModule { }
