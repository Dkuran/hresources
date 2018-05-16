import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NotFoundComponent } from './../components/not-found/not-found.component';

const routes: Routes = [
  { path: 'admin', children: [
    { path: 'employee', component: EmployeeListComponent},
    { path: 'project', component: ProjectListComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
