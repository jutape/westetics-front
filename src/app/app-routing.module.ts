import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FilesSelectComponent } from './pages/files-select/files-select.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: FilesSelectComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
