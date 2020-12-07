import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CategoryService } from './service/category.service';
import { AuthGuardService } from './service/auth-guard.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateCategoryComponent,
    ListCategoriesComponent,
    DetailsCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    CategoryService, 
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
