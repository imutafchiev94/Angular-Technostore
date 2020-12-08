import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { AuthGuardService } from './service/auth-guard.service';


const routes: Routes = [
  {path: 'login', component: LoginComponent  },
  {path: 'register', component: RegisterComponent},
  {path: 'createcategory', component: CreateCategoryComponent, canActivate: [AuthGuardService]},
  {path: 'categories', component: ListCategoriesComponent},
  {path: 'categories/:id', component: DetailsCategoryComponent},
  {path: 'categories/:id/edit', component: EditCategoryComponent, canActivate: [AdminAuthGuardService]},
  {path: '', pathMatch: `full`, redirectTo: 'home'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
