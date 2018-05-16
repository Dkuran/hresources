import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ],
  declarations: [ProjectListComponent, EmployeeListComponent]
})
export class AdministrationModule { }
