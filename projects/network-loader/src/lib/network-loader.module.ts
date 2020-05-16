import { NgModule } from '@angular/core';
import { NetworkLoaderComponent } from './network-loader.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderInterceptor} from './http-loader.interceptor';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [NetworkLoaderComponent],
  imports: [
    CommonModule
  ],
  exports: [NetworkLoaderComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ]
})
export class NetworkLoaderModule { }
