import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' }, // Lazy loading
  { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule' }, // Lazy loading (Must use the # or the module will not loaded)
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) // Lazy loading with import statement
  },
  { path: 'login', component: LoginComponent }, // Loaded the component to the ngModule
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }