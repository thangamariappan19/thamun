import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './User/AddCategory.component';
import { CategoryComponent } from './User/category/category.component';
import { CategorylistComponent } from './User/categorylist/categorylist.component';
const routes: Routes = [

  {
    path: '', redirectTo: '/categorylist', pathMatch: 'full'
  },

  {
    path: 'AddCategory',
    component: AddCategoryComponent,
    data: { title: 'AddCategory' }
  },
  {
    path: 'category',
    component: CategoryComponent,
    data: { title: 'AddCategory' }
  },
  {
    path: 'categorylist',
    component: CategorylistComponent,
    data: { title: 'AddCategory' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
