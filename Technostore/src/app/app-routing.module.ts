import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { DetailsUserComponent } from './details-user/details-user.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent  },
  {path: 'register', component: RegisterComponent},
  {path: 'user/details', component: DetailsUserComponent, canActivate:[AuthGuardService]},
  {path: 'user/edit', component: EditUserComponent, canActivate: [AuthGuardService]},
  {path: 'categories/create', component: CreateCategoryComponent, canActivate: [AuthGuardService]},
  {path: 'categories/:id', component: DetailsCategoryComponent},
  {path: 'categories/:id/edit', component: EditCategoryComponent, canActivate: [AdminAuthGuardService]},
  {path: 'products/create', component: CreateProductComponent, canActivate: [AuthGuardService]},
  {path: 'products/:id/edit', component: EditProductComponent, canActivate: [AuthGuardService]},
  {path: 'products/:id', component: DetailsProductComponent},
  {path: 'orders', component: CreateOrderComponent, canActivate: [AuthGuardService]},
  {path: '', pathMatch: `full`, redirectTo: 'home'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
