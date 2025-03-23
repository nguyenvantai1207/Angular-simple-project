import { Routes } from '@angular/router';
import { EmployeeListComponent } from './shared/components/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './shared/components/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './shared/components/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './shared/components/employee-edit/employee-edit.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'create', component: EmployeeCreateComponent },
  { path: 'update/:id', component: EmployeeEditComponent },
];
