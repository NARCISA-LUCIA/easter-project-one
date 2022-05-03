import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  { path: 'admin/users/register', component: RegisterComponent },
  { path: 'admin/users/edit', component: UserEditComponent },
  { path: 'admin/users', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
