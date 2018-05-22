import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ManageProjectComponent } from './manage-project/manage-project.component';

const routes: Routes = [
  {path: '', component: ProjectListComponent},
  { path: 'manage/:id', component: ManageProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
