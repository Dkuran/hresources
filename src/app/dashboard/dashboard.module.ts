import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { AdministrationModule } from './../administration/administration.module';
// import { EmployeeModule } from './../employee/employee.module';
// import { ProjectsModule } from './../projects/projects.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AdministrationModule
    // EmployeeModule,
    // ProjectsModule
  ],
  declarations: [HomeComponent]
})
export class DashboardModule { }
