import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/AddCategory.component';
import { CategoryComponent } from './components/category/category.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

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
    data: { title: 'category-list' }
  },
  {
    path: 'product',
    component: CreateProductComponent,
    data: { title: 'product' }
  },
  {
    path: 'product-list',
    component: ProductListComponent,
    data: { title: 'product-list' }
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
