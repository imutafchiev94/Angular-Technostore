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
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { ErrorInterceptorService } from './service/error-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialModule} from './material-modules';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DetailsUserComponent } from './details-user/details-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateCategoryComponent,
    ListCategoriesComponent,
    DetailsCategoryComponent,
    EditCategoryComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    CreateProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    ListProductsComponent,
    EditUserComponent,
    DetailsUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialModule
  ],
  providers: [
    AuthService, 
    CategoryService, 
    AuthGuardService,
    AdminAuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
