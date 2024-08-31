import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'categories',
        loadComponent: () => import('./features/categories/categories.component').then(m => m.CategoriesComponent), // This is the lazy loading syntax
    },
    {
      path: 'categories/add',
      loadComponent: () => import('./features/category-add/category-add.component').then(m => m.CategoryAddComponent),
    }
];
