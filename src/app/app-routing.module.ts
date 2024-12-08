import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './tfm/public/pages/main-page/main-page.component';
import { ErrorPageComponent } from './tfm/shared/error-page/error-page.component';
import { AdminPageComponent } from './tfm/admin/pages/admin-page/admin-page.component';
import { AuthGuard } from './tfm/admin/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
